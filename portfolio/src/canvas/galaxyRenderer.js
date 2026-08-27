/**
 * HIGH-PERFORMANCE CANVAS 2D GALAXY ENGINE
 * Renders deep space, dynamic nebula clouds, 3D-depth starfields,
 * interactive gravitational forces, and 4 celestial destinations.
 */

export class GalaxyRenderer {
  constructor(canvasElement, onNodeClick, onNodeHover) {
    this.canvas = canvasElement;
    this.ctx = canvasElement.getContext('2d');
    this.onNodeClick = onNodeClick;
    this.onNodeHover = onNodeHover;

    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.dpr = Math.min(window.devicePixelRatio || 1, 2);

    // Mouse / Touch Tracking
    this.mouse = { x: this.width / 2, y: this.height / 2, targetX: this.width / 2, targetY: this.height / 2, active: false };
    this.camera = { x: 0, y: 0, targetX: 0, targetY: 0, zoom: 1, targetZoom: 1 };
    
    // Performance & Motion State
    this.reducedMotion = false;
    this.animating = true;
    this.hoveredNode = null;
    this.rotationAngle = 0;
    this.bgPulsePhase = 0;

    // Load Attached Photorealistic Galaxy Background Image
    this.bgImage = new Image();
    this.bgImage.src = './src/assets/galaxy-bg.jpg';
    this.bgLoaded = false;
    this.bgImage.onload = () => {
      this.bgLoaded = true;
    };

    // Celestial Destination Nodes Configuration
    this.nodes = [
      { id: 'work', label: 'WORK', sub: 'Celestial Planet & Projects', type: 'planet', angle: 0, dist: 220, r: 28, hover: false },
      { id: 'data', label: 'DATA', sub: 'Pulsing Star Cluster', type: 'cluster', angle: Math.PI * 0.5, dist: 240, r: 26, hover: false },
      { id: 'experiments', label: 'EXPERIMENTS', sub: 'Comet Belt & Ideas', type: 'comet', angle: Math.PI * 1.0, dist: 230, r: 24, hover: false },
      { id: 'about', label: 'ABOUT', sub: 'Serene Moon & Story', type: 'moon', angle: Math.PI * 1.5, dist: 210, r: 28, hover: false }
    ];

    this.initStars();
    this.initEvents();
    this.resize();
  }

  initStars() {
    this.stars = [];
    const count = this.width < 768 ? 400 : 900;
    
    for (let i = 0; i < count; i++) {
      const radius = Math.random() * 2200;
      const angle = Math.random() * Math.PI * 2;
      this.stars.push({
        x: Math.cos(angle) * radius,
        y: Math.sin(angle) * radius,
        z: Math.random() * 3 + 0.5, // Depth layer
        size: Math.random() * 1.6 + 0.4,
        baseAlpha: Math.random() * 0.75 + 0.25,
        twinkleSpeed: Math.random() * 0.02 + 0.005,
        twinklePhase: Math.random() * Math.PI * 2,
        color: this.randomStarColor()
      });
    }

    // Asteroid belt particles
    this.asteroids = [];
    for (let i = 0; i < 40; i++) {
      this.asteroids.push({
        angle: Math.random() * Math.PI * 2,
        dist: 200 + Math.random() * 70,
        size: Math.random() * 2.5 + 1,
        speed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1)
      });
    }

    // Shooting stars & cursor particle tail
    this.shootingStars = [];
    this.cursorDust = [];
    this.lastShootingStarTime = Date.now();
  }

  randomStarColor() {
    const palette = ['#F3F1EA', '#C4B9E5', '#9BB4E5', '#E5B9D9', '#FFFFFF'];
    return palette[Math.floor(Math.random() * palette.length)];
  }

  initEvents() {
    window.addEventListener('resize', () => this.resize());
    
    const handleMove = (x, y) => {
      this.mouse.targetX = x;
      this.mouse.targetY = y;
      this.mouse.active = true;

      // Add delicate cursor stardust particle
      if (!this.reducedMotion && Math.random() < 0.3) {
        this.cursorDust.push({
          x: x,
          y: y,
          vx: (Math.random() - 0.5) * 0.8,
          vy: (Math.random() - 0.5) * 0.8,
          size: Math.random() * 2 + 1,
          alpha: 0.6,
          life: 1.0
        });
      }
    };

    window.addEventListener('mousemove', (e) => handleMove(e.clientX, e.clientY));
    
    window.addEventListener('touchmove', (e) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX, e.touches[0].clientY);
      }
    }, { passive: true });

    this.canvas.addEventListener('click', (e) => {
      const rect = this.canvas.getBoundingClientRect();
      const clickX = e.clientX - rect.left;
      const clickY = e.clientY - rect.top;
      this.checkClick(clickX, clickY);
    });
  }

  resize() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
    this.canvas.width = this.width * this.dpr;
    this.canvas.height = this.height * this.dpr;
    this.ctx.scale(this.dpr, this.dpr);

    // Responsive node distance calculation
    const baseDist = Math.min(this.width, this.height) * (this.width < 600 ? 0.32 : 0.28);
    this.nodes[0].dist = baseDist;
    this.nodes[1].dist = baseDist * 1.05;
    this.nodes[2].dist = baseDist * 0.95;
    this.nodes[3].dist = baseDist * 1.02;
  }

  setReducedMotion(isReduced) {
    this.reducedMotion = isReduced;
  }

  setCameraZoom(zoom, duration = 1000) {
    this.camera.targetZoom = zoom;
  }

  checkClick(x, y) {
    const centerX = this.width / 2 + this.camera.x;
    const centerY = this.height / 2 + this.camera.y;

    for (let node of this.nodes) {
      const nx = centerX + Math.cos(node.angle + this.rotationAngle) * node.dist;
      const ny = centerY + Math.sin(node.angle + this.rotationAngle) * node.dist;
      const dist = Math.hypot(x - nx, y - ny);
      
      // Tap area buffer (minimum 44px for touch friendliness)
      const hitRadius = Math.max(node.r * 1.8, 30);
      if (dist <= hitRadius) {
        if (this.onNodeClick) this.onNodeClick(node.id);
        return;
      }
    }
  }

  update() {
    // Smooth Mouse & Camera Lerp
    this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
    this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

    const offsetX = (this.mouse.x - this.width / 2) * 0.03;
    const offsetY = (this.mouse.y - this.height / 2) * 0.03;

    this.camera.x += (offsetX - this.camera.x) * 0.05;
    this.camera.y += (offsetY - this.camera.y) * 0.05;
    this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.05;

    // Slow organic cosmic motion
    if (!this.reducedMotion) {
      this.rotationAngle += 0.0006;
      this.bgPulsePhase += 0.004;
    }

    // Check Hover States
    const centerX = this.width / 2 + this.camera.x;
    const centerY = this.height / 2 + this.camera.y;
    let anyHovered = false;

    for (let node of this.nodes) {
      const nx = centerX + Math.cos(node.angle + this.rotationAngle) * node.dist;
      const ny = centerY + Math.sin(node.angle + this.rotationAngle) * node.dist;
      const dist = Math.hypot(this.mouse.x - nx, this.mouse.y - ny);

      const hitRadius = Math.max(node.r * 1.8, 32);
      if (dist <= hitRadius) {
        if (!node.hover) {
          node.hover = true;
          if (this.onNodeHover) this.onNodeHover(node);
        }
        anyHovered = true;
        this.hoveredNode = node;
      } else {
        node.hover = false;
      }
    }

    // Update cursor dust particles
    for (let i = this.cursorDust.length - 1; i >= 0; i--) {
      const p = this.cursorDust[i];
      p.x += p.vx;
      p.y += p.vy;
      p.life -= 0.02;
      if (p.life <= 0) {
        this.cursorDust.splice(i, 1);
      }
    }

    // Occasional shooting star (every ~12 seconds)
    if (!this.reducedMotion && Date.now() - this.lastShootingStarTime > 12000) {
      this.lastShootingStarTime = Date.now();
      const sx = Math.random() * this.width * 0.8;
      const sy = Math.random() * this.height * 0.4;
      this.shootingStars.push({
        x: sx,
        y: sy,
        len: Math.random() * 100 + 80,
        speed: Math.random() * 12 + 10,
        alpha: 1.0
      });
    }

    // Update shooting stars
    for (let i = this.shootingStars.length - 1; i >= 0; i--) {
      const s = this.shootingStars[i];
      s.x += s.speed;
      s.y += s.speed * 0.6;
      s.alpha -= 0.015;
      if (s.alpha <= 0 || s.x > this.width || s.y > this.height) {
        this.shootingStars.splice(i, 1);
      }
    }
    
    this.canvas.style.cursor = anyHovered ? 'pointer' : 'default';
  }

  draw() {
    const ctx = this.ctx;
    const w = this.width;
    const h = this.height;
    const centerX = w / 2 + this.camera.x;
    const centerY = h / 2 + this.camera.y;

    ctx.clearRect(0, 0, w, h);

    const videoEl = document.getElementById('bg-video');
    const isVideoPlaying = videoEl && !videoEl.paused && videoEl.readyState > 2;

    if (!isVideoPlaying && this.bgLoaded) {
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.scale(this.camera.zoom, this.camera.zoom);
      ctx.rotate(this.rotationAngle * 0.15);

      const baseScale = Math.max(w / this.bgImage.width, h / this.bgImage.height) * (1.2 + Math.sin(this.bgPulsePhase) * 0.03);
      const drawW = this.bgImage.width * baseScale;
      const drawH = this.bgImage.height * baseScale;

      ctx.globalAlpha = 0.95;
      ctx.drawImage(this.bgImage, -drawW / 2, -drawH / 2, drawW, drawH);
      ctx.restore();
    }

    // 2. VOLUMETRIC NEBULA CLOUDS
    // 3. DARK CONTRAST VIGNETTE MASK FOR MAXIMUM TEXT VISIBILITY OVER BRIGHT GALAXY PHOTO
    const contrastMask = ctx.createRadialGradient(centerX, centerY, w * 0.15, centerX, centerY, Math.max(w, h) * 0.75);
    contrastMask.addColorStop(0, 'rgba(2, 3, 10, 0.20)');
    contrastMask.addColorStop(0.5, 'rgba(2, 3, 10, 0.50)');
    contrastMask.addColorStop(1, 'rgba(2, 3, 10, 0.88)');
    ctx.fillStyle = contrastMask;
    ctx.fillRect(0, 0, w, h);

    this.drawNebula(ctx, centerX, centerY);

    ctx.save();
    ctx.translate(centerX, centerY);
    ctx.scale(this.camera.zoom, this.camera.zoom);

    for (let star of this.stars) {
      star.twinklePhase += star.twinkleSpeed;
      const alpha = star.baseAlpha + Math.sin(star.twinklePhase) * 0.25;

      const px = star.x - this.camera.x * (star.z * 0.4);
      const py = star.y - this.camera.y * (star.z * 0.4);

      ctx.fillStyle = star.color;
      ctx.globalAlpha = Math.max(0.1, Math.min(1, alpha));
      ctx.beginPath();
      ctx.arc(px, py, star.size / star.z, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // RENDER CURSOR DUST TAIL
    for (let p of this.cursorDust) {
      ctx.save();
      ctx.fillStyle = '#C4B9E5';
      ctx.globalAlpha = p.life * 0.5;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    // RENDER SHOOTING STARS
    for (let s of this.shootingStars) {
      ctx.save();
      const grad = ctx.createLinearGradient(s.x, s.y, s.x - s.len, s.y - s.len * 0.6);
      grad.addColorStop(0, `rgba(243, 241, 234, ${s.alpha})`);
      grad.addColorStop(0.3, `rgba(196, 185, 229, ${s.alpha * 0.6})`);
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');

      ctx.strokeStyle = grad;
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(s.x, s.y);
      ctx.lineTo(s.x - s.len, s.y - s.len * 0.6);
      ctx.stroke();
      ctx.restore();
    }

    // 4. CENTRAL GALAXY STAR / CORE
    ctx.save();
    ctx.translate(centerX, centerY);
    const coreGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, 45);
    coreGlow.addColorStop(0, 'rgba(255, 255, 255, 1)');
    coreGlow.addColorStop(0.2, 'rgba(196, 185, 229, 0.8)');
    coreGlow.addColorStop(0.6, 'rgba(74, 58, 115, 0.3)');
    coreGlow.addColorStop(1, 'rgba(0, 0, 0, 0)');

    ctx.fillStyle = coreGlow;
    ctx.beginPath();
    ctx.arc(0, 0, 50, 0, Math.PI * 2);
    ctx.fill();
    ctx.restore();

    // 5. ASTEROID DUST BELT
    ctx.save();
    ctx.translate(centerX, centerY);
    for (let ast of this.asteroids) {
      if (!this.reducedMotion) ast.angle += ast.speed;
      const ax = Math.cos(ast.angle) * ast.dist;
      const ay = Math.sin(ast.angle) * ast.dist;
      
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.beginPath();
      ctx.arc(ax, ay, ast.size, 0, Math.PI * 2);
      ctx.fill();
    }
    ctx.restore();

    // 6. CELESTIAL DESTINATION NODES & LABELS
    for (let node of this.nodes) {
      const nx = centerX + Math.cos(node.angle + this.rotationAngle) * node.dist;
      const ny = centerY + Math.sin(node.angle + this.rotationAngle) * node.dist;

      ctx.save();
      ctx.translate(nx, ny);

      const targetScale = node.hover ? 1.25 : 1.0;
      node.currentScale = node.currentScale || 1.0;
      node.currentScale += (targetScale - node.currentScale) * 0.1;

      ctx.scale(node.currentScale, node.currentScale);

      // Render custom celestial graphics based on node type
      if (node.type === 'planet') {
        // WORK: Ringed Planet
        const pGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, node.r * 1.5);
        pGlow.addColorStop(0, '#6A466D');
        pGlow.addColorStop(0.7, '#263A78');
        pGlow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.fillStyle = pGlow;
        ctx.beginPath();
        ctx.arc(0, 0, node.r * 1.5, 0, Math.PI * 2);
        ctx.fill();

        // Planet Body
        ctx.fillStyle = '#315B8C';
        ctx.beginPath();
        ctx.arc(0, 0, node.r, 0, Math.PI * 2);
        ctx.fill();

        // Planet Rings
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.ellipse(0, 0, node.r * 1.6, node.r * 0.4, Math.PI * -0.2, 0, Math.PI * 2);
        ctx.stroke();

      } else if (node.type === 'cluster') {
        // DATA: Star Cluster Node
        for (let i = 0; i < 6; i++) {
          const ca = (i / 6) * Math.PI * 2;
          const cx = Math.cos(ca) * 14;
          const cy = Math.sin(ca) * 14;

          ctx.fillStyle = '#C4B9E5';
          ctx.beginPath();
          ctx.arc(cx, cy, 3.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.4)';
          ctx.beginPath();
          ctx.moveTo(0, 0);
          ctx.lineTo(cx, cy);
          ctx.stroke();
        }
        ctx.fillStyle = '#FFFFFF';
        ctx.beginPath();
        ctx.arc(0, 0, 8, 0, Math.PI * 2);
        ctx.fill();

      } else if (node.type === 'comet') {
        // EXPERIMENTS: Asteroid / Comet Stream
        ctx.fillStyle = '#E2E8F0';
        ctx.beginPath();
        ctx.arc(0, 0, node.r * 0.7, 0, Math.PI * 2);
        ctx.fill();

        // Dust trail
        const trailGlow = ctx.createLinearGradient(-30, -10, 10, 10);
        trailGlow.addColorStop(0, 'rgba(106, 70, 109, 0)');
        trailGlow.addColorStop(1, 'rgba(196, 185, 229, 0.8)');
        ctx.fillStyle = trailGlow;
        ctx.beginPath();
        ctx.arc(4, -4, node.r * 1.2, 0, Math.PI * 2);
        ctx.fill();

      } else if (node.type === 'moon') {
        // ABOUT: Serene Moon Sphere
        const mGlow = ctx.createRadialGradient(-6, -6, 2, 0, 0, node.r);
        mGlow.addColorStop(0, '#FFFFFF');
        mGlow.addColorStop(0.6, '#CBD5E1');
        mGlow.addColorStop(1, '#0F172A');

        ctx.fillStyle = mGlow;
        ctx.beginPath();
        ctx.arc(0, 0, node.r, 0, Math.PI * 2);
        ctx.fill();
      }

      ctx.restore();

      // HIGH-IMPACT SCI-FI CELESTIAL NODE PILL
      ctx.save();
      const labelText = node.label;
      ctx.font = '700 13px Orbitron, sans-serif';
      const textWidth = ctx.measureText(labelText).width;
      const pillWidth = textWidth + 36;
      const pillHeight = 30;
      const labelOffsetY = node.r + 28;

      ctx.fillStyle = node.hover ? 'rgba(15, 23, 42, 0.96)' : 'rgba(5, 8, 23, 0.90)';
      ctx.strokeStyle = node.hover ? 'rgba(255, 255, 255, 0.95)' : 'rgba(196, 185, 229, 0.45)';
      ctx.lineWidth = 1.5;

      ctx.shadowColor = node.hover ? 'rgba(244, 114, 182, 0.8)' : 'rgba(0, 0, 0, 0.95)';
      ctx.shadowBlur = node.hover ? 16 : 8;

      ctx.beginPath();
      if (ctx.roundRect) {
        ctx.roundRect(nx - pillWidth / 2, ny + labelOffsetY - 19, pillWidth, pillHeight, 15);
      } else {
        ctx.rect(nx - pillWidth / 2, ny + labelOffsetY - 19, pillWidth, pillHeight);
      }
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#FFFFFF';
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillText(labelText, nx, ny + labelOffsetY - 4);

      if (node.hover) {
        ctx.fillStyle = '#DDD6FE';
        ctx.font = '600 10px Orbitron, sans-serif';
        ctx.fillText(node.sub.toUpperCase(), nx, ny + labelOffsetY + 20);
      }

      ctx.restore();
    }
  }

  drawNebula(ctx, cx, cy) {
    ctx.save();
    ctx.globalCompositeOperation = 'screen';

    // Cloud 1: Muted Violet
    const neb1 = ctx.createRadialGradient(cx - 150, cy - 100, 20, cx - 150, cy - 100, 320);
    neb1.addColorStop(0, 'rgba(74, 58, 115, 0.28)');
    neb1.addColorStop(0.7, 'rgba(38, 58, 120, 0.12)');
    neb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = neb1;
    ctx.beginPath();
    ctx.arc(cx - 150, cy - 100, 320, 0, Math.PI * 2);
    ctx.fill();

    // Cloud 2: Subtle Rose-Violet
    const neb2 = ctx.createRadialGradient(cx + 200, cy + 120, 30, cx + 200, cy + 120, 380);
    neb2.addColorStop(0, 'rgba(106, 70, 109, 0.22)');
    neb2.addColorStop(0.6, 'rgba(49, 91, 140, 0.1)');
    neb2.addColorStop(1, 'rgba(0, 0, 0, 0)');
    ctx.fillStyle = neb2;
    ctx.beginPath();
    ctx.arc(cx + 200, cy + 120, 380, 0, Math.PI * 2);
    ctx.fill();

    ctx.restore();
  }

  loop() {
    if (!this.animating) return;
    this.update();
    this.draw();
    requestAnimationFrame(() => this.loop());
  }

  start() {
    this.animating = true;
    this.loop();
  }

  stop() {
    this.animating = false;
  }
}
