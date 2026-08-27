/**
 * GALAXY PORTFOLIO CONSOLIDATED ENGINE BUNDLE
 * Featuring real client websites & Netlify live deployments.
 */

(function () {
  'use strict';

  // 1. DATASTORE
  const WORK_PROJECTS = [
    {
      id: "sanjivani-clinic",
      number: "01",
      title: "Sanjivani Family Clinic",
      tagline: "Serene, patient-first digital healthcare platform.",
      summary: "A modern medical clinic web experience designed for patient comfort, doctor schedules, service overview, and online appointment booking.",
      image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://sanjivaniifamilyclinic.netlify.app/",
      techStack: ["HTML5 / JS", "Vanilla CSS", "Responsive UI", "Healthcare UX"],
      story: {
        idea: "Dismantling cold clinical design tropes in favor of a soothing, accessible, and reassuring patient journey.",
        build: "Engineered ultra-clear typography hierarchy, keyboard-first navigation, and interactive appointment triage flows.",
        experience: "Patients can easily discover specialized practitioners, read treatment pathways, and securely book consultations."
      }
    },
    {
      id: "kalakriti-boutique",
      number: "02",
      title: "Kalakriti Boutique",
      tagline: "Hand-crafted ethnic fashion & bridal apparel atelier.",
      summary: "An elegant fashion catalog presenting bespoke ethnic wear, sarees, and bridal couture through rich visual editorial galleries.",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://kalakritiboutique-1.netlify.app/",
      techStack: ["CSS Custom Props", "Editorial Design", "Vanilla JS"],
      story: {
        idea: "Allowing traditional craft and garment silhouettes to speak loudest through a spatial luxury interface.",
        build: "Designed full-screen visual lookbooks, smooth drag collection showcases, and clean product overview cards.",
        experience: "Buyers explore high-resolution fabric textures and collection narratives with effortless elegance."
      }
    },
    {
      id: "cardamom-oak-cafe",
      number: "03",
      title: "Cardamom & Oak Café",
      tagline: "Sensory coffee roasters & artisanal dining hub.",
      summary: "An atmospheric cafe experience combining single-origin roast selections, table reservation flows, and sensory menu galleries.",
      image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://cardamomandoakcafe.netlify.app/",
      techStack: ["HTML5 / ES6", "CSS Flex & Grid", "Interactive Menu"],
      story: {
        idea: "Capturing the aroma and craftsmanship of specialty coffee brewing into an atmospheric digital interface.",
        build: "Built responsive roast flavor sliders, menu indicators, and dynamic warm background styling.",
        experience: "Customers explore coffee origins before selecting their signature roast or reserving a table."
      }
    },
    {
      id: "pulse-forge-gym",
      number: "04",
      title: "Pulse Forge Gym",
      tagline: "High-intensity athletic conditioning laboratory.",
      summary: "Dynamic, high-impact athletic performance web portal featuring workout class schedules, trainer highlights, and membership passes.",
      image: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://pulseforgegym-0.netlify.app/",
      techStack: ["Web Canvas", "Custom Physics Easing", "Vanilla CSS"],
      story: {
        idea: "Translating raw athletic energy into a bold, responsive digital experience that motivates action.",
        build: "Developed kinetic schedule filtering, trainer video showcases, and dynamic dark mode themes.",
        experience: "Athletes experience instant class schedule filtering, trainer highlights, and seamless membership booking."
      }
    },
    {
      id: "aura-salon",
      number: "05",
      title: "Aura Salon",
      tagline: "Bespoke hair design & luxury beauty studio.",
      summary: "A sophisticated salon interface showcasing hair styling portfolios, color treatments, and appointment reservations.",
      image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=1200&q=80",
      liveUrl: "https://aurasalon-00.netlify.app/",
      techStack: ["Vite / JS", "Vanilla CSS", "Editorial Layout"],
      story: {
        idea: "Creating a digital studio presence matching the tactile, modern luxury atmosphere of the physical salon.",
        build: "Constructed using responsive CSS layouts, stylist galleries, and appointment reservation flows.",
        experience: "Clients transition through dark luxury aesthetics, service menus, and zero-friction mobile booking."
      }
    }
  ];

  const DATA_PROJECTS = [
    {
      id: "churn-predict",
      number: "DATA_01",
      title: "Predictive Churn & LTV Telemetry",
      summary: "Analyzed multi-dimensional user cohort retention patterns across 100k+ events to identify key churn friction nodes.",
      tools: ["Python / Pandas", "D3.js Node Networks", "SQL Cohort Analysis"],
      insight: "Identifying drop-off points reduced customer acquisition friction by 24% while unlocking high-LTV patterns."
    },
    {
      id: "supply-chain",
      number: "DATA_02",
      title: "Algorithmic Supply Chain Optimizer",
      summary: "Constructed real-time dynamic inventory graph models calculating optimal fulfillment routing based on geospatial logistics.",
      tools: ["Network Graphs", "Statistical Modeling", "Canvas Charts"],
      insight: "Streamlined multi-node fulfillment routing, reducing transit latency across regions by 18%."
    },
    {
      id: "user-telemetry",
      number: "DATA_03",
      title: "Real-time Engagement Topology",
      summary: "Visualized real-time spatial heatmaps and clickstream velocity across responsive web applications.",
      tools: ["Canvas 2D Data Mapping", "WebSockets Data Stream", "Analytics Pipeline"],
      insight: "Transformed raw event logs into actionable visual intuition for design and product engineering teams."
    }
  ];

  const EXPERIMENTS_LIST = [
    {
      id: "exp-sanjivani",
      tag: "DEMO WEBSITE // HEALTHCARE CLINIC",
      title: "Sanjivani Family Clinic",
      description: "Serene patient-first family healthcare clinic web platform featuring appointments, doctor schedules, and treatment services.",
      demoUrl: "https://sanjivaniifamilyclinic.netlify.app/"
    },
    {
      id: "exp-kalakriti",
      tag: "DEMO WEBSITE // BOUTIQUE ATELIER",
      title: "Kalakriti Boutique",
      description: "Hand-crafted ethnic haute-couture boutique catalog presenting custom designer saree and bridal apparel collections.",
      demoUrl: "https://kalakritiboutique-1.netlify.app/"
    },
    {
      id: "exp-cafe",
      tag: "DEMO WEBSITE // COFFEE & DINING",
      title: "Cardamom & Oak Café",
      description: "Artisanal coffee roasters & culinary cafe interface with online table reservations and sensory menu choices.",
      demoUrl: "https://cardamomandoakcafe.netlify.app/"
    },
    {
      id: "exp-pulse",
      tag: "DEMO WEBSITE // ATHLETIC GYM",
      title: "Pulse Forge Gym",
      description: "High-intensity athletic conditioning laboratory, workout class schedules, and trainer booking portal.",
      demoUrl: "https://pulseforgegym-0.netlify.app/"
    },
    {
      id: "exp-aura",
      tag: "DEMO WEBSITE // LUXURY SALON",
      title: "Aura Salon",
      description: "Bespoke hair design & luxury beauty studio website featuring hair architecture styling, balayage, and appointment scheduling.",
      demoUrl: "https://aurasalon-00.netlify.app/"
    }
  ];

  const CREATOR_PROFILE = {
    name: "Isha",
    tagline: "SO... WHO'S BEHIND THIS?",
    traits: ["CURIOUS", "ALWAYS LEARNING", "BUILDING", "EXPERIMENTING", "WEB", "DATA", "TECHNOLOGY"],
    bioParagraphs: [
      "I believe digital experiences should feel less like cold tools and more like living, memorable spaces.",
      "My work bridges creative front-end architecture, spatial visual design, and rigorous data analysis. Whether constructing an interactive web universe or engineering bespoke client experiences, I strive for clarity, elegance, and intentionality.",
      "No generic templates. No unnecessary noise. Just thoughtful engineering and experiences that make people pause and feel."
    ],
    socials: {
      instagram: "https://www.instagram.com/auravia.studio/",
      instagramHandle: "@auravia.studio",
      email: "auraviastudio05@gmail.com"
    }
  };

  // 2. CANVAS GALAXY ENGINE
  class GalaxyRenderer {
    constructor(canvasElement, onNodeClick, onNodeHover) {
      this.canvas = canvasElement;
      this.ctx = canvasElement.getContext('2d');
      this.onNodeClick = onNodeClick;
      this.onNodeHover = onNodeHover;

      this.width = window.innerWidth;
      this.height = window.innerHeight;
      this.dpr = Math.min(window.devicePixelRatio || 1, 2);

      this.mouse = { x: this.width / 2, y: this.height / 2, targetX: this.width / 2, targetY: this.height / 2, active: false };
      this.camera = { x: 0, y: 0, targetX: 0, targetY: 0, zoom: 1, targetZoom: 1 };
      
      this.reducedMotion = false;
      this.animating = true;
      this.hoveredNode = null;
      this.rotationAngle = 0;
      this.bgPulsePhase = 0;

      this.bgImage = new Image();
      this.bgImage.src = './src/assets/galaxy-bg.jpg';
      this.bgLoaded = false;
      this.bgImage.onload = () => {
        this.bgLoaded = true;
      };

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
          z: Math.random() * 3 + 0.5,
          size: Math.random() * 1.6 + 0.4,
          baseAlpha: Math.random() * 0.75 + 0.25,
          twinkleSpeed: Math.random() * 0.02 + 0.005,
          twinklePhase: Math.random() * Math.PI * 2,
          color: this.randomStarColor()
        });
      }

      this.asteroids = [];
      for (let i = 0; i < 40; i++) {
        this.asteroids.push({
          angle: Math.random() * Math.PI * 2,
          dist: 200 + Math.random() * 70,
          size: Math.random() * 2.5 + 1,
          speed: (Math.random() * 0.002 + 0.0005) * (Math.random() > 0.5 ? 1 : -1)
        });
      }

      this.cursorDust = [];
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

      const baseDist = Math.min(this.width, this.height) * (this.width < 600 ? 0.32 : 0.28);
      this.nodes[0].dist = baseDist;
      this.nodes[1].dist = baseDist * 1.05;
      this.nodes[2].dist = baseDist * 0.95;
      this.nodes[3].dist = baseDist * 1.02;
    }

    setReducedMotion(isReduced) {
      this.reducedMotion = isReduced;
    }

    setCameraZoom(zoom) {
      this.camera.targetZoom = zoom;
    }

    checkClick(x, y) {
      const centerX = this.width / 2 + this.camera.x;
      const centerY = this.height / 2 + this.camera.y;

      for (let node of this.nodes) {
        const nx = centerX + Math.cos(node.angle + this.rotationAngle) * node.dist;
        const ny = centerY + Math.sin(node.angle + this.rotationAngle) * node.dist;
        const dist = Math.hypot(x - nx, y - ny);
        
        const hitRadius = Math.max(node.r * 1.8, 30);
        if (dist <= hitRadius) {
          if (this.onNodeClick) this.onNodeClick(node.id);
          return;
        }
      }
    }

    update() {
      this.mouse.x += (this.mouse.targetX - this.mouse.x) * 0.05;
      this.mouse.y += (this.mouse.targetY - this.mouse.y) * 0.05;

      const offsetX = (this.mouse.x - this.width / 2) * 0.03;
      const offsetY = (this.mouse.y - this.height / 2) * 0.03;

      this.camera.x += (offsetX - this.camera.x) * 0.05;
      this.camera.y += (offsetY - this.camera.y) * 0.05;
      this.camera.zoom += (this.camera.targetZoom - this.camera.zoom) * 0.05;

      if (!this.reducedMotion) {
        this.rotationAngle += 0.0006;
        this.bgPulsePhase += 0.004;
      }

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

      if (!anyHovered && this.hoveredNode) {
        this.hoveredNode = null;
        if (this.onNodeHover) this.onNodeHover(null);
      }

      for (let i = this.cursorDust.length - 1; i >= 0; i--) {
        const p = this.cursorDust[i];
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.02;
        if (p.life <= 0) {
          this.cursorDust.splice(i, 1);
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

      const contrastMask = ctx.createRadialGradient(centerX, centerY, w * 0.15, centerX, centerY, Math.max(w, h) * 0.75);
      contrastMask.addColorStop(0, 'rgba(2, 3, 10, 0.15)');
      contrastMask.addColorStop(0.5, 'rgba(2, 3, 10, 0.45)');
      contrastMask.addColorStop(1, 'rgba(2, 3, 10, 0.85)');
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

      for (let p of this.cursorDust) {
        ctx.save();
        ctx.fillStyle = '#C4B9E5';
        ctx.globalAlpha = p.life * 0.5;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * p.life, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

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

      for (let node of this.nodes) {
        const nx = centerX + Math.cos(node.angle + this.rotationAngle) * node.dist;
        const ny = centerY + Math.sin(node.angle + this.rotationAngle) * node.dist;

        ctx.save();
        ctx.translate(nx, ny);

        const targetScale = node.hover ? 1.25 : 1.0;
        node.currentScale = node.currentScale || 1.0;
        node.currentScale += (targetScale - node.currentScale) * 0.1;

        ctx.scale(node.currentScale, node.currentScale);

        if (node.type === 'planet') {
          const pGlow = ctx.createRadialGradient(0, 0, 0, 0, 0, node.r * 1.5);
          pGlow.addColorStop(0, '#6A466D');
          pGlow.addColorStop(0.7, '#263A78');
          pGlow.addColorStop(1, 'rgba(0,0,0,0)');
          ctx.fillStyle = pGlow;
          ctx.beginPath();
          ctx.arc(0, 0, node.r * 1.5, 0, Math.PI * 2);
          ctx.fill();

          ctx.fillStyle = '#315B8C';
          ctx.beginPath();
          ctx.arc(0, 0, node.r, 0, Math.PI * 2);
          ctx.fill();

          ctx.strokeStyle = 'rgba(255, 255, 255, 0.7)';
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.ellipse(0, 0, node.r * 1.6, node.r * 0.4, Math.PI * -0.2, 0, Math.PI * 2);
          ctx.stroke();

        } else if (node.type === 'cluster') {
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
          ctx.fillStyle = '#E2E8F0';
          ctx.beginPath();
          ctx.arc(0, 0, node.r * 0.7, 0, Math.PI * 2);
          ctx.fill();

          const trailGlow = ctx.createLinearGradient(-30, -10, 10, 10);
          trailGlow.addColorStop(0, 'rgba(106, 70, 109, 0)');
          trailGlow.addColorStop(1, 'rgba(196, 185, 229, 0.8)');
          ctx.fillStyle = trailGlow;
          ctx.beginPath();
          ctx.arc(4, -4, node.r * 1.2, 0, Math.PI * 2);
          ctx.fill();

        } else if (node.type === 'moon') {
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

      const neb1 = ctx.createRadialGradient(cx - 150, cy - 100, 20, cx - 150, cy - 100, 320);
      neb1.addColorStop(0, 'rgba(74, 58, 115, 0.28)');
      neb1.addColorStop(0.7, 'rgba(38, 58, 120, 0.12)');
      neb1.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = neb1;
      ctx.beginPath();
      ctx.arc(cx - 150, cy - 100, 320, 0, Math.PI * 2);
      ctx.fill();

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

  // 3. AUDIO ENGINE
  class SpaceAudioEngine {
    constructor() {
      this.ctx = null;
      this.oscillators = [];
      this.gainNode = null;
      this.playing = false;
    }

    init() {
      if (this.ctx) return;
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;
      this.ctx = new AudioContext();
      this.gainNode = this.ctx.createGain();
      this.gainNode.gain.setValueAtTime(0.0001, this.ctx.currentTime);
      this.gainNode.connect(this.ctx.destination);
    }

    toggle() {
      if (!this.ctx) this.init();
      if (!this.ctx) return false;
      if (this.ctx.state === 'suspended') this.ctx.resume();
      if (this.playing) {
        this.stop();
        return false;
      } else {
        this.start();
        return true;
      }
    }

    start() {
      if (!this.ctx || this.playing) return;
      this.playing = true;
      const freqs = [110.00, 164.81, 277.18];
      this.oscillators = freqs.map(freq => {
        const osc = this.ctx.createOscillator();
        const oscGain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        oscGain.gain.setValueAtTime(0.04, this.ctx.currentTime);
        osc.connect(oscGain);
        oscGain.connect(this.gainNode);
        osc.start();
        return osc;
      });
      this.gainNode.gain.linearRampToValueAtTime(0.08, this.ctx.currentTime + 2);
    }

    stop() {
      if (!this.playing || !this.gainNode) return;
      this.playing = false;
      this.gainNode.gain.linearRampToValueAtTime(0.0001, this.ctx.currentTime + 1);
      setTimeout(() => {
        this.oscillators.forEach(osc => osc.stop());
        this.oscillators = [];
      }, 1000);
    }

    playChime(freq = 523.25) {
      if (!this.ctx || !this.playing) return;
      try {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        gain.gain.setValueAtTime(0.03, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + 0.5);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start();
        osc.stop(this.ctx.currentTime + 0.5);
      } catch (e) {}
    }
  }

  // 4. OPENING SEQUENCE
  class OpeningSequence {
    constructor(options = {}) {
      this.loadingScreen = document.getElementById('loading-screen');
      this.introOverlay = document.getElementById('intro-overlay');
      this.introTitle = document.getElementById('intro-title');
      this.introSubtitle = document.getElementById('intro-subtitle');
      this.hudNav = document.getElementById('hud-nav');
      this.onComplete = options.onComplete || (() => {});
    }

    async start() {
      await this.delay(800);
      this.loadingScreen.classList.add('fade-out');
      await this.delay(1000);
      this.loadingScreen.style.display = 'none';

      this.introOverlay.classList.remove('hidden');
      this.introOverlay.classList.add('visible');

      await this.typeText(this.introTitle, 'YOU FOUND ME.', 90);
      await this.delay(600);

      this.introSubtitle.textContent = 'Welcome to somewhere a little different.';
      this.introSubtitle.classList.add('visible');

      await this.delay(2000);

      this.introOverlay.classList.remove('visible');
      await this.delay(1000);
      this.introOverlay.classList.add('hidden');

      this.hudNav.classList.remove('hidden');
      this.hudNav.classList.add('visible');

      this.onComplete();
    }

    typeText(element, text, speed) {
      return new Promise((resolve) => {
        element.textContent = '';
        let index = 0;
        const timer = setInterval(() => {
          element.textContent += text[index];
          index++;
          if (index >= text.length) {
            clearInterval(timer);
            resolve();
          }
        }, speed);
      });
    }

    delay(ms) {
      return new Promise((resolve) => setTimeout(resolve, ms));
    }
  }

  // 5. VIEW RENDERERS
  function renderWorkView(container) {
    container.innerHTML = `
      <div class="view-container">
        <header class="view-header">
          <button class="back-to-galaxy-btn" data-back-to-galaxy="true">
            <span>←</span>
            <span>BACK TO GALAXY</span>
          </button>
          <span class="view-tag">SECTOR_01 // CELESTIAL PLANET</span>
          <h1 class="view-title">Discovered Projects</h1>
          <p class="view-subtitle">
            Exploring digital experiences, tailored brand systems, and bespoke web applications.
          </p>
        </header>

        <div class="projects-deck">
          ${WORK_PROJECTS.map(project => `
            <article class="project-card" id="project-${project.id}">
              <div class="project-visual">
                <img src="${project.image}" alt="Preview mockup of ${project.title}" class="project-img" loading="lazy" />
              </div>

              <div class="project-info">
                <span class="project-number">${project.number} // CELESTIAL_PROJECT</span>
                <h2 class="project-title">${project.title}</h2>
                <p class="project-summary">${project.summary}</p>

                <div class="project-story-tabs" role="tablist">
                  <button class="tab-btn active" data-tab="idea" data-target="${project.id}">THE IDEA</button>
                  <button class="tab-btn" data-tab="build" data-target="${project.id}">THE BUILD</button>
                  <button class="tab-btn" data-tab="experience" data-target="${project.id}">THE EXPERIENCE</button>
                </div>

                <div class="story-panel" id="panel-${project.id}">
                  ${project.story.idea}
                </div>

                <div class="tech-tags">
                  ${project.techStack.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>

                <a href="${project.liveUrl}" target="_blank" rel="noopener noreferrer" class="project-link-btn">
                  <span>ENTER THE EXPERIENCE</span>
                  <span>→</span>
                </a>
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;

    container.querySelectorAll('.tab-btn').forEach(btn => {
      const handleTab = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        const projectId = btn.getAttribute('data-target');
        const tabType = btn.getAttribute('data-tab');
        const parentList = btn.closest('.project-story-tabs');
        parentList.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const project = WORK_PROJECTS.find(p => p.id === projectId);
        const panel = container.querySelector(`#panel-${projectId}`);
        if (project && panel && project.story[tabType]) {
          panel.style.opacity = '0';
          setTimeout(() => {
            panel.textContent = project.story[tabType];
            panel.style.opacity = '1';
          }, 150);
        }
      };
      btn.addEventListener('click', handleTab);
      btn.addEventListener('touchend', handleTab, { passive: false });
    });
  }

  function renderDataView(container) {
    container.innerHTML = `
      <div class="view-container">
        <header class="view-header">
          <button class="back-to-galaxy-btn" data-back-to-galaxy="true">
            <span>←</span>
            <span>BACK TO GALAXY</span>
          </button>
          <span class="view-tag">SECTOR_02 // STAR CLUSTER</span>
          <h1 class="view-title">Data Analytics & Telemetry</h1>
          <p class="view-subtitle">
            "Numbers aren't just numbers. They tell stories."
          </p>
        </header>

        <div class="data-grid">
          ${DATA_PROJECTS.map((data, index) => `
            <article class="data-card">
              <div class="data-viz-container">
                <canvas class="data-canvas" id="data-canvas-${index}" width="300" height="160"></canvas>
              </div>

              <div class="data-card-info">
                <span class="project-number">${data.number}</span>
                <h3 class="data-card-title">${data.title}</h3>
                <p class="data-card-desc">${data.summary}</p>
              </div>

              <div class="data-insight-box">
                ✦ <strong>INSIGHT:</strong> ${data.insight}
              </div>

              <div class="tech-tags">
                ${data.tools.map(tool => `<span class="tech-tag">${tool}</span>`).join('')}
              </div>
            </article>
          `).join('')}
        </div>
      </div>
    `;

    DATA_PROJECTS.forEach((_, index) => {
      const canvas = container.querySelector(`#data-canvas-${index}`);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      ctx.clearRect(0, 0, w, h);
      const nodes = [
        { x: 40, y: 110 }, { x: 90, y: 50 }, { x: 150, y: 90 },
        { x: 210, y: 40 }, { x: 260, y: 100 }
      ];

      ctx.strokeStyle = 'rgba(196, 185, 229, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) ctx.lineTo(nodes[i].x, nodes[i].y);
      ctx.stroke();

      ctx.lineTo(nodes[nodes.length - 1].x, h);
      ctx.lineTo(nodes[0].x, h);
      ctx.closePath();
      const fillGlow = ctx.createLinearGradient(0, 0, 0, h);
      fillGlow.addColorStop(0, 'rgba(74, 58, 115, 0.25)');
      fillGlow.addColorStop(1, 'rgba(2, 3, 10, 0)');
      ctx.fillStyle = fillGlow;
      ctx.fill();

      nodes.forEach((n, i) => {
        ctx.fillStyle = i === 3 ? '#F3F1EA' : '#C4B9E5';
        ctx.beginPath();
        ctx.arc(n.x, n.y, i === 3 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();
      });
    });
  }

  function renderExperimentsView(container) {
    container.innerHTML = `
      <div class="view-container">
        <header class="view-header">
          <button class="back-to-galaxy-btn" data-back-to-galaxy="true">
            <span>←</span>
            <span>BACK TO GALAXY</span>
          </button>
          <span class="view-tag">SECTOR_03 // COMET BELT</span>
          <h1 class="view-title">Featured Live Client Websites</h1>
          <p class="view-subtitle">
            Explore live deployed client websites created for Sanjivani Clinic, Kalakriti Boutique, Cardamom & Oak Cafe, Pulse Forge Gym, and Aura Salon. Click any card for a live interactive preview.
          </p>
        </header>

        <div class="experiments-grid">
          ${EXPERIMENTS_LIST.map(exp => `
            <div class="experiment-node" data-id="${exp.id}" tabindex="0" aria-label="Demo Website: ${exp.title}">
              <span class="experiment-tag">${exp.tag}</span>
              <h3 class="experiment-title">${exp.title}</h3>
              <p class="experiment-snippet">${exp.description}</p>
              <span class="exp-launch-hint">PREVIEW LIVE DEMO ↗</span>
            </div>
          `).join('')}
        </div>
      </div>

      <div id="experiment-modal" class="exp-modal hidden" aria-hidden="true">
        <div class="exp-modal-card" style="max-width: 850px;">
          <div class="exp-modal-header">
            <div>
              <span class="experiment-tag" id="exp-modal-tag">LIVE DEMO PREVIEW</span>
              <h2 class="experiment-title" id="exp-modal-title">Live Website Experience</h2>
            </div>
            <button id="close-exp-modal" class="close-btn" aria-label="Close website preview">&times;</button>
          </div>
          
          <div class="exp-canvas-wrapper" style="height: 420px; background: #000;">
            <iframe id="demo-iframe" src="" style="width:100%; height:100%; border:none;" title="Demo Website Preview"></iframe>
          </div>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
            <p class="exp-modal-desc" id="exp-modal-desc" style="margin: 0; max-width: 420px;"></p>
            <div style="display: flex; align-items: center; gap: 0.85rem; flex-wrap: wrap;">
              <button id="cancel-exp-modal" class="back-to-galaxy-btn" style="margin:0; padding:0.75rem 1.4rem; font-size:0.78rem; background: rgba(239, 68, 68, 0.2); border-color: #EF4444; color: #FFFFFF;">
                <span>✖</span>
                <span>CANCEL & CLOSE</span>
              </button>
              <a id="exp-launch-link" href="#" target="_blank" rel="noopener noreferrer" class="project-link-btn" style="margin: 0;">
                <span>ENTER FULLSITE</span>
                <span>↗</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    `;

    const nodes = container.querySelectorAll('.experiment-node');
    const modal = container.querySelector('#experiment-modal');
    const closeBtn = container.querySelector('#close-exp-modal');
    const cancelBtn = container.querySelector('#cancel-exp-modal');
    const iframe = container.querySelector('#demo-iframe');
    const tagEl = container.querySelector('#exp-modal-tag');
    const titleEl = container.querySelector('#exp-modal-title');
    const descEl = container.querySelector('#exp-modal-desc');
    const launchLink = container.querySelector('#exp-launch-link');

    const closeModal = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      modal.classList.remove('active');
      setTimeout(() => {
        modal.classList.add('hidden');
        iframe.src = '';
      }, 300);
    };

    nodes.forEach(node => {
      const openHandler = (e) => {
        if (e) e.preventDefault();
        const id = node.getAttribute('data-id');
        const exp = EXPERIMENTS_LIST.find(e => e.id === id);
        if (exp) {
          tagEl.textContent = exp.tag;
          titleEl.textContent = exp.title;
          descEl.textContent = exp.description;
          iframe.src = exp.demoUrl;
          launchLink.href = exp.demoUrl;

          modal.classList.remove('hidden');
          setTimeout(() => modal.classList.add('active'), 10);
        }
      };
      node.addEventListener('click', openHandler);
      node.addEventListener('touchend', openHandler, { passive: false });
    });

    if (closeBtn) {
      closeBtn.addEventListener('click', closeModal);
      closeBtn.addEventListener('touchend', closeModal, { passive: false });
      closeBtn.addEventListener('pointerdown', closeModal);
    }

    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeModal);
      cancelBtn.addEventListener('touchend', closeModal, { passive: false });
      cancelBtn.addEventListener('pointerdown', closeModal);
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeModal(e);
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        closeModal(e);
      }
    });
  }

  function renderAboutView(container) {
    container.innerHTML = `
      <div class="view-container">
        <button class="back-to-galaxy-btn" data-back-to-galaxy="true" style="margin-bottom: 0;">
          <span>←</span>
          <span>BACK TO GALAXY</span>
        </button>
        <div class="about-wrapper">
          <h1 class="about-hook">${CREATOR_PROFILE.tagline}</h1>

          <div class="about-traits">
            ${CREATOR_PROFILE.traits.map(trait => `<span class="trait-pill">${trait}</span>`).join('')}
          </div>

          <div class="about-story-card">
            ${CREATOR_PROFILE.bioParagraphs.map(p => `<p>${p}</p>`).join('')}

            <div class="creator-signoff">
              <span class="sign-role">CREATOR & DEVELOPER</span>
              <span class="sign-name">${CREATOR_PROFILE.name}</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function renderEndingView(container) {
    container.innerHTML = `
      <div class="view-container">
        <button class="back-to-galaxy-btn" data-back-to-galaxy="true" style="margin-bottom: 0;">
          <span>←</span>
          <span>BACK TO GALAXY</span>
        </button>
        <div class="ending-wrapper">
          <p class="ending-line-1">READY TO BUILD SOMETHING AMAZING?</p>
          <h2 class="ending-line-2">WHAT SHOULD WE BUILD NEXT?</h2>
          <p style="color: #CBD5E1; max-width: 650px; font-size: 1.05rem; font-weight: 400; text-shadow: 0 2px 8px rgba(0,0,0,0.9);">
            Send a direct message to developer <strong>Isha</strong> for your custom business website, salon, clinic, café, boutique, gym, or custom platform.
          </p>

          <!-- DIRECT EMAIL CONTACT FORM CARD -->
          <div class="direct-email-card">
            <div class="email-card-header">
              <span class="view-tag">INITIATE PROJECT // DIRECT EMAIL MESSAGING</span>
              <h3 class="email-card-title">Send a Direct Message for Website Creation</h3>
            </div>

            <form id="direct-email-form" class="direct-email-form">
              <div class="form-row">
                <div class="form-group">
                  <label for="client-name">YOUR NAME / CONTACT PERSON</label>
                  <input type="text" id="client-name" name="clientName" placeholder="e.g. Rahul Sharma" required />
                </div>
                <div class="form-group">
                  <label for="client-phone">PHONE NUMBER / WHATSAPP</label>
                  <input type="tel" id="client-phone" name="clientPhone" placeholder="e.g. +91 98765 43210" required />
                </div>
              </div>

              <div class="form-row">
                <div class="form-group">
                  <label for="client-email">YOUR EMAIL ADDRESS</label>
                  <input type="email" id="client-email" name="clientEmail" placeholder="e.g. client@domain.com" required />
                </div>
                <div class="form-group">
                  <label for="business-name">BUSINESS NAME & LOCATION</label>
                  <input type="text" id="business-name" name="businessName" placeholder="e.g. Auravia Studio / Mumbai" required />
                </div>
              </div>

              <div class="form-group">
                <label for="website-type">WHAT TYPE OF BUSINESS IS THIS WEBSITE FOR?</label>
                <select id="website-type" name="websiteType" required>
                  <option value="Custom Business Website (Bespoke Customisation)">✨ Custom Business / Bespoke Website (Specify Details Below)</option>
                  <option value="Unisex Salon / Beauty Studio Website">Unisex Salon / Beauty Studio Website</option>
                  <option value="Healthcare Clinic / Family Practice Platform">Healthcare Clinic / Family Practice Platform</option>
                  <option value="Coffee Roasters / Dining Café Experience">Coffee Roasters / Dining Café Experience</option>
                  <option value="Boutique Atelier / Ethnic Fashion Catalog">Boutique Atelier / Ethnic Fashion Catalog</option>
                  <option value="Athletic Gym / Fitness Performance Portal">Athletic Gym / Fitness Performance Portal</option>
                  <option value="Other Custom Business Request">Other Custom Business Request</option>
                </select>
              </div>

              <div class="form-group">
                <label for="client-message">WEBSITE CUSTOMISATION & PROJECT DETAILS</label>
                <textarea id="client-message" name="clientMessage" rows="4" placeholder="Describe your business, customisation needs, target features, or timeline..." required></textarea>
              </div>

              <div class="form-actions" style="display: flex; gap: 1rem; flex-wrap: wrap; margin-top: 1rem;">
                <button type="submit" id="send-gmail-btn" class="project-link-btn send-email-submit-btn">
                  <span>✉ SEND VIA GMAIL (INSTANT)</span>
                  <span>↗</span>
                </button>
                <button type="button" id="send-mailto-btn" class="back-to-galaxy-btn" style="margin:0; padding:0.9rem 1.4rem; background: rgba(255,255,255,0.08);">
                  <span>📧 DEFAULT EMAIL APP</span>
                </button>
                <button type="button" id="copy-email-btn" class="back-to-galaxy-btn" style="margin:0; padding:0.9rem 1.4rem;">
                  <span>📋 COPY: auraviastudio05@gmail.com</span>
                </button>
              </div>
            </form>
          </div>

          <div class="contact-links">
            <a href="https://www.instagram.com/auravia.studio/" target="_blank" rel="noopener noreferrer" class="contact-btn">
              <span>INSTAGRAM (@auravia.studio)</span>
              <span>↗</span>
            </a>
            <a href="mailto:auraviastudio05@gmail.com" class="contact-btn">
              <span>DIRECT EMAIL: auraviastudio05@gmail.com</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      <div id="copy-toast" class="copy-toast" role="status">
        Opening Gmail compose window...
      </div>
    `;

    const form = container.querySelector('#direct-email-form');
    const mailtoBtn = container.querySelector('#send-mailto-btn');
    const copyBtn = container.querySelector('#copy-email-btn');
    const toast = container.querySelector('#copy-toast');

    const getFormData = () => {
      const name = container.querySelector('#client-name').value.trim() || 'Valued Client';
      const phone = container.querySelector('#client-phone').value.trim() || 'Not specified';
      const email = container.querySelector('#client-email').value.trim() || 'Not specified';
      const business = container.querySelector('#business-name').value.trim() || 'Custom Business';
      const type = container.querySelector('#website-type').value;
      const message = container.querySelector('#client-message').value.trim() || 'No additional details specified.';

      const subjectRaw = `Website Inquiry: ${type} - ${name} (${business})`;
      const bodyRaw = `Hello Isha,\n\nMy name is ${name}.\nPhone/WhatsApp: ${phone}\nEmail: ${email}\nBusiness/Location: ${business}\nWebsite Category: ${type}\n\nCustomisation & Project Details:\n${message}\n\nBest regards,\n${name}`;

      return { name, phone, email, business, type, message, subjectRaw, bodyRaw };
    };

    const returnToGalaxyHome = () => {
      setTimeout(() => {
        const backHomeBtn = container.querySelector('[data-back-to-galaxy="true"]') || document.getElementById('galaxy-home-btn');
        if (backHomeBtn) backHomeBtn.click();
      }, 1200);
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = getFormData();
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=auraviastudio05@gmail.com&su=${encodeURIComponent(data.subjectRaw)}&body=${encodeURIComponent(data.bodyRaw)}`;

        // Copy text to clipboard so client never loses their message
        navigator.clipboard.writeText(data.bodyRaw).catch(() => {});

        if (toast) {
          toast.textContent = "Opening Gmail compose... Returning you to Galaxy Home!";
          toast.classList.add('active');
          setTimeout(() => toast.classList.remove('active'), 4500);
        }

        window.open(gmailUrl, '_blank');
        returnToGalaxyHome();
      });
    }

    if (mailtoBtn) {
      mailtoBtn.addEventListener('click', () => {
        const data = getFormData();
        const mailtoUrl = `mailto:auraviastudio05@gmail.com?subject=${encodeURIComponent(data.subjectRaw)}&body=${encodeURIComponent(data.bodyRaw)}`;

        if (toast) {
          toast.textContent = "Opening email app... Returning you to Galaxy Home!";
          toast.classList.add('active');
          setTimeout(() => toast.classList.remove('active'), 3500);
        }

        window.location.href = mailtoUrl;
        returnToGalaxyHome();
      });
    }

    if (copyBtn && toast) {
      copyBtn.addEventListener('click', () => {
        navigator.clipboard.writeText('auraviastudio05@gmail.com')
          .then(() => {
            toast.textContent = `Email copied to clipboard: auraviastudio05@gmail.com`;
            toast.classList.add('active');
            setTimeout(() => toast.classList.remove('active'), 3000);
          })
          .catch(() => alert(`Email: auraviastudio05@gmail.com`));
      });
    }
  }

  // 6. APPLICATION INITIALIZATION
  class GalaxyPortfolioApp {
    constructor() {
      this.currentState = 'intro';
      this.audioEngine = new SpaceAudioEngine();

      this.canvasEl = document.getElementById('galaxy-canvas');
      this.hudNav = document.getElementById('hud-nav');
      this.locationEl = document.getElementById('current-location');
      this.homeBtn = document.getElementById('galaxy-home-btn');
      this.motionBtn = document.getElementById('motion-toggle-btn');
      this.soundBtn = document.getElementById('sound-toggle-btn');
      this.mobileMenuBtn = document.getElementById('destinations-menu-btn');
      this.mobileDrawer = document.getElementById('mobile-menu-drawer');
      this.closeDrawerBtn = document.getElementById('close-mobile-drawer');

      this.viewElements = {
        work: document.getElementById('view-work'),
        data: document.getElementById('view-data'),
        experiments: document.getElementById('view-experiments'),
        about: document.getElementById('view-about'),
        ending: document.getElementById('view-ending')
      };

      this.initDestinationViews();
      this.initGalaxyEngine();
      this.initOpeningSequence();
      this.initEvents();
    }

    initDestinationViews() {
      renderWorkView(this.viewElements.work);
      renderDataView(this.viewElements.data);
      renderExperimentsView(this.viewElements.experiments);
      renderAboutView(this.viewElements.about);
      renderEndingView(this.viewElements.ending);
    }

    initGalaxyEngine() {
      this.galaxy = new GalaxyRenderer(
        this.canvasEl,
        (nodeId) => {
          this.audioEngine.playChime(659.25);
          this.navigateTo(nodeId);
        },
        (hoveredNode) => {
          if (this.locationEl) {
            if (this.currentState === 'galaxy' && hoveredNode) {
              this.locationEl.textContent = `TARGET: ${hoveredNode.label} // ${hoveredNode.sub.toUpperCase()}`;
            } else if (this.currentState === 'galaxy') {
              this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
            }
          }
          if (hoveredNode) {
            this.audioEngine.playChime(440.00);
          }
        }
      );
      this.galaxy.start();
    }

    initOpeningSequence() {
      const opening = new OpeningSequence({
        onComplete: () => {
          this.currentState = 'galaxy';
          if (this.locationEl) this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
          const quickBar = document.getElementById('galaxy-quick-bar');
          if (quickBar) quickBar.classList.remove('hidden'), quickBar.classList.add('visible');
        }
      });
      opening.start();
    }

    navigateTo(destId) {
      if (this.currentState === destId) return;

      this.closeMobileDrawer();
      const quickBar = document.getElementById('galaxy-quick-bar');

      if (destId === 'galaxy') {
        this.galaxy.setCameraZoom(1.0);
        if (this.locationEl) this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
        if (quickBar) quickBar.classList.remove('hidden'), quickBar.classList.add('visible');
      } else {
        this.galaxy.setCameraZoom(1.8);
        if (quickBar) quickBar.classList.remove('visible'), quickBar.classList.add('hidden');
        const labels = {
          work: 'SECTOR_01 // WORK PLANET',
          data: 'SECTOR_02 // DATA CLUSTER',
          experiments: 'SECTOR_03 // COMET BELT',
          about: 'SECTOR_04 // SERENE MOON',
          ending: 'INITIATE PROJECT // DIRECT EMAIL'
        };
        if (this.locationEl) this.locationEl.textContent = labels[destId] || 'SECTOR_NAV';
      }

      Object.keys(this.viewElements).forEach(key => {
        const el = this.viewElements[key];
        if (key === destId) {
          el.classList.remove('hidden');
          setTimeout(() => el.classList.add('active'), 50);
          el.scrollTop = 0;
          el.focus();
        } else {
          el.classList.remove('active');
          setTimeout(() => el.classList.add('hidden'), 600);
        }
      });

      this.currentState = destId;
    }

    initEvents() {
      const handleHomeClick = (e) => {
        if (e) e.preventDefault();
        this.navigateTo('galaxy');
      };

      this.homeBtn.addEventListener('click', handleHomeClick);

      const emailHudBtn = document.getElementById('direct-email-hud-btn');
      if (emailHudBtn) {
        emailHudBtn.addEventListener('click', (e) => {
          if (e) e.preventDefault();
          this.navigateTo('ending');
        });
      }

      // Event delegation for all back-to-galaxy buttons and quick nav buttons
      const handleNavDelegation = (e) => {
        const backBtn = e.target.closest('[data-back-to-galaxy="true"]');
        if (backBtn) {
          e.preventDefault();
          this.navigateTo('galaxy');
          return;
        }

        const quickBtn = e.target.closest('[data-nav]');
        if (quickBtn) {
          e.preventDefault();
          const targetNav = quickBtn.getAttribute('data-nav');
          this.navigateTo(targetNav);
          return;
        }
      };

      document.addEventListener('click', handleNavDelegation);
      document.addEventListener('touchend', handleNavDelegation, { passive: false });

      let isReduced = false;
      if (this.motionBtn) {
        this.motionBtn.addEventListener('click', () => {
          isReduced = !isReduced;
          this.galaxy.setReducedMotion(isReduced);
          this.motionBtn.style.opacity = isReduced ? '0.5' : '1';
        });
      }

      if (this.soundBtn) {
        this.soundBtn.addEventListener('click', () => {
          const playing = this.audioEngine.toggle();
          this.soundBtn.style.opacity = playing ? '1' : '0.6';
        });
      }

      if (this.mobileMenuBtn) {
        this.mobileMenuBtn.addEventListener('click', () => this.openMobileDrawer());
      }
      if (this.closeDrawerBtn) {
        this.closeDrawerBtn.addEventListener('click', () => this.closeMobileDrawer());
      }

      const mobileCards = document.querySelectorAll('.mobile-nav-card');
      mobileCards.forEach(card => {
        card.addEventListener('click', () => {
          const dest = card.getAttribute('data-dest');
          this.navigateTo(dest);
        });
      });

      const helpBtn = document.getElementById('help-toggle-btn');
      const kbModal = document.getElementById('keyboard-modal');
      const closeKbBtn = document.getElementById('close-kb-modal');

      const toggleHelpModal = () => {
        if (kbModal.classList.contains('hidden')) {
          kbModal.classList.remove('hidden');
          setTimeout(() => kbModal.classList.add('active'), 10);
        } else {
          kbModal.classList.remove('active');
          setTimeout(() => kbModal.classList.add('hidden'), 300);
        }
      };

      if (helpBtn) helpBtn.addEventListener('click', toggleHelpModal);
      if (closeKbBtn) {
        closeKbBtn.addEventListener('click', toggleHelpModal);
        closeKbBtn.addEventListener('touchend', (e) => {
          e.preventDefault();
          toggleHelpModal();
        });
      }
      if (kbModal) {
        kbModal.addEventListener('click', (e) => {
          if (e.target === kbModal) toggleHelpModal();
        });
      }

      window.addEventListener('keydown', (e) => {
        if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') return;

        if (e.key === 'Escape') {
          kbModal.classList.remove('active');
          setTimeout(() => kbModal.classList.add('hidden'), 300);
          this.navigateTo('galaxy');
        } else if (e.key === '1') {
          this.navigateTo('work');
        } else if (e.key === '2') {
          this.navigateTo('data');
        } else if (e.key === '3') {
          this.navigateTo('experiments');
        } else if (e.key === '4') {
          this.navigateTo('about');
        } else if (e.key === 'm' || e.key === 'M') {
          if (this.motionBtn) this.motionBtn.click();
        } else if (e.key === 's' || e.key === 'S') {
          if (this.soundBtn) this.soundBtn.click();
        } else if (e.key === '?') {
          toggleHelpModal();
        }
      });
    }

    openMobileDrawer() {
      this.mobileDrawer.classList.remove('hidden');
      setTimeout(() => this.mobileDrawer.classList.add('active'), 10);
    }

    closeMobileDrawer() {
      this.mobileDrawer.classList.remove('active');
      setTimeout(() => this.mobileDrawer.classList.add('hidden'), 400);
    }
  }

  document.addEventListener('DOMContentLoaded', () => {
    window.app = new GalaxyPortfolioApp();
  });
})();
