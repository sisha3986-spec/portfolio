/**
 * DATA DESTINATION COMPONENT
 * Renders star constellation network visualizations, data analytics case stories,
 * and key metric insights ("Numbers tell stories.").
 */

import { DATA_PROJECTS } from '../data/projectsData.js';

export class DataDestination {
  constructor(containerElement) {
    this.container = containerElement;
    this.render();
  }

  render() {
    this.container.innerHTML = `
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
          ${DATA_PROJECTS.map((data, index) => this.createDataCardMarkup(data, index)).join('')}
        </div>
      </div>
    `;

    this.drawDataCanvases();
  }

  createDataCardMarkup(data, index) {
    return `
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
    `;
  }

  drawDataCanvases() {
    DATA_PROJECTS.forEach((_, index) => {
      const canvas = this.container.querySelector(`#data-canvas-${index}`);
      if (!canvas) return;
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;

      // Draw dynamic constellation nodes & data flow graph
      ctx.clearRect(0, 0, w, h);

      const nodes = [
        { x: 40, y: 110 }, { x: 90, y: 50 }, { x: 150, y: 90 },
        { x: 210, y: 40 }, { x: 260, y: 100 }
      ];

      // Draw connecting lines
      ctx.strokeStyle = 'rgba(196, 185, 229, 0.3)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.moveTo(nodes[0].x, nodes[0].y);
      for (let i = 1; i < nodes.length; i++) {
        ctx.lineTo(nodes[i].x, nodes[i].y);
      }
      ctx.stroke();

      // Draw area fill
      ctx.lineTo(nodes[nodes.length - 1].x, h);
      ctx.lineTo(nodes[0].x, h);
      ctx.closePath();
      const fillGlow = ctx.createLinearGradient(0, 0, 0, h);
      fillGlow.addColorStop(0, 'rgba(74, 58, 115, 0.25)');
      fillGlow.addColorStop(1, 'rgba(2, 3, 10, 0)');
      ctx.fillStyle = fillGlow;
      ctx.fill();

      // Draw pulsing nodes
      nodes.forEach((n, i) => {
        ctx.fillStyle = i === 3 ? '#F3F1EA' : '#C4B9E5';
        ctx.beginPath();
        ctx.arc(n.x, n.y, i === 3 ? 5 : 3.5, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = 'rgba(196, 185, 229, 0.4)';
        ctx.beginPath();
        ctx.arc(n.x, n.y, i === 3 ? 9 : 6, 0, Math.PI * 2);
        ctx.stroke();
      });
    });
  }
}
