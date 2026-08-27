/**
 * EXPERIMENTS & DEMO WEBSITES DESTINATION COMPONENT
 * Renders featured showcase demo websites (Salon, Café, Boutique, Clinic, Gym)
 * with live iframe previews and full experience triggers.
 */

import { EXPERIMENTS_LIST } from '../data/projectsData.js';

export class ExperimentsDestination {
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
          <span class="view-tag">SECTOR_03 // COMET BELT</span>
          <h1 class="view-title">Featured Live Client Websites</h1>
          <p class="view-subtitle">
            Explore live deployed client websites created for Sanjivani Clinic, Kalakriti Boutique, Cardamom & Oak Cafe, Pulse Forge Gym, and Aura Salon. Click any card for a live interactive preview.
          </p>
        </header>

        <div class="experiments-grid">
          ${EXPERIMENTS_LIST.map(exp => this.createExperimentMarkup(exp)).join('')}
        </div>
      </div>

      <!-- INTERACTIVE DEMO WEBSITE PREVIEW MODAL -->
      <div id="experiment-modal" class="exp-modal hidden" aria-hidden="true">
        <div class="exp-modal-card" style="max-width: 850px;">
          <div class="exp-modal-header">
            <div>
              <span class="experiment-tag" id="exp-modal-tag">DEMO PREVIEW</span>
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

    this.bindEvents();
  }

  createExperimentMarkup(exp) {
    return `
      <div class="experiment-node" data-id="${exp.id}" tabindex="0" aria-label="Demo Website: ${exp.title}">
        <span class="experiment-tag">${exp.tag}</span>
        <h3 class="experiment-title">${exp.title}</h3>
        <p class="experiment-snippet">${exp.description}</p>
        <span class="exp-launch-hint">PREVIEW LIVE DEMO ↗</span>
      </div>
    `;
  }

  bindEvents() {
    const nodes = this.container.querySelectorAll('.experiment-node');
    const modal = this.container.querySelector('#experiment-modal');
    const closeBtn = this.container.querySelector('#close-exp-modal');
    const cancelBtn = this.container.querySelector('#cancel-exp-modal');

    nodes.forEach(node => {
      const handler = (e) => {
        if (e) e.preventDefault();
        const id = node.getAttribute('data-id');
        const exp = EXPERIMENTS_LIST.find(e => e.id === id);
        if (exp) this.openSandbox(exp);
      };
      node.addEventListener('click', handler);
      node.addEventListener('touchend', handler, { passive: false });
    });

    const closeHandler = (e) => {
      if (e) {
        e.preventDefault();
        e.stopPropagation();
      }
      this.closeSandbox();
    };

    if (closeBtn) {
      closeBtn.addEventListener('click', closeHandler);
      closeBtn.addEventListener('touchend', closeHandler, { passive: false });
    }
    if (cancelBtn) {
      cancelBtn.addEventListener('click', closeHandler);
      cancelBtn.addEventListener('touchend', closeHandler, { passive: false });
    }

    modal.addEventListener('click', (e) => {
      if (e.target === modal) this.closeSandbox();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
        this.closeSandbox();
      }
    });
  }

  openSandbox(exp) {
    const modal = this.container.querySelector('#experiment-modal');
    const tagEl = this.container.querySelector('#exp-modal-tag');
    const titleEl = this.container.querySelector('#exp-modal-title');
    const descEl = this.container.querySelector('#exp-modal-desc');
    const iframe = this.container.querySelector('#demo-iframe');
    const launchLink = this.container.querySelector('#exp-launch-link');

    tagEl.textContent = exp.tag;
    titleEl.textContent = exp.title;
    descEl.textContent = exp.description;
    iframe.src = exp.demoUrl;
    launchLink.href = exp.demoUrl;

    modal.classList.remove('hidden');
    setTimeout(() => modal.classList.add('active'), 10);
  }

  closeSandbox() {
    const modal = this.container.querySelector('#experiment-modal');
    const iframe = this.container.querySelector('#demo-iframe');

    modal.classList.remove('active');
    setTimeout(() => {
      modal.classList.add('hidden');
      iframe.src = '';
    }, 300);
  }
}
