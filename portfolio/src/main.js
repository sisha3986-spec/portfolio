/**
 * MAIN APPLICATION ORCHESTRATOR
 * Wires together the canvas galaxy engine, opening sequence,
 * spatial view transitions, HUD controls, audio, and accessibility.
 */

import { GalaxyRenderer } from './canvas/galaxyRenderer.js';
import { OpeningSequence } from './components/openingSequence.js';
import { WorkDestination } from './components/workDestination.js';
import { DataDestination } from './components/dataDestination.js';
import { ExperimentsDestination } from './components/experimentsDestination.js';
import { AboutDestination } from './components/aboutDestination.js';
import { EndingSequence } from './components/endingSequence.js';
import { SpaceAudioEngine } from './audio/spaceAudio.js';

class GalaxyPortfolioApp {
  constructor() {
    this.currentState = 'intro'; // 'intro', 'galaxy', 'work', 'data', 'experiments', 'about', 'ending'
    this.audioEngine = new SpaceAudioEngine();

    this.initDOMReferences();
    this.initDestinationViews();
    this.initGalaxyEngine();
    this.initOpeningSequence();
    this.initEvents();
  }

  initDOMReferences() {
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
  }

  initDestinationViews() {
    new WorkDestination(this.viewElements.work);
    new DataDestination(this.viewElements.data);
    new ExperimentsDestination(this.viewElements.experiments);
    new AboutDestination(this.viewElements.about);
    new EndingSequence(this.viewElements.ending);
  }

  initGalaxyEngine() {
    this.galaxy = new GalaxyRenderer(
      this.canvasEl,
      (nodeId) => {
        this.audioEngine.playChime(659.25);
        this.navigateTo(nodeId);
      },
      (hoveredNode) => {
        if (this.currentState === 'galaxy' && hoveredNode) {
          this.locationEl.textContent = `TARGET: ${hoveredNode.label} // ${hoveredNode.sub.toUpperCase()}`;
          this.audioEngine.playChime(440.00);
        } else if (this.currentState === 'galaxy') {
          this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
        }
      }
    );
    this.galaxy.start();
  }

  initOpeningSequence() {
    const opening = new OpeningSequence({
      onComplete: () => {
        this.currentState = 'galaxy';
        this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
      }
    });
    opening.start();
  }

  navigateTo(destId) {
    if (this.currentState === destId) return;

    // Close mobile drawer if active
    this.closeMobileDrawer();

    // 1. Transition Galaxy Camera Zoom & Hyperspace
    if (destId === 'galaxy') {
      this.galaxy.setCameraZoom(1.0);
      this.locationEl.textContent = 'SECTOR_00 // UNIVERSE';
    } else {
      this.galaxy.setCameraZoom(1.8);
      const labels = {
        work: 'SECTOR_01 // WORK PLANET',
        data: 'SECTOR_02 // DATA CLUSTER',
        experiments: 'SECTOR_03 // COMET BELT',
        about: 'SECTOR_04 // SERENE MOON',
        ending: 'SECTOR_05 // FINALE'
      };
      this.locationEl.textContent = labels[destId] || 'SECTOR_NAV';
    }

    // 2. Crossfade Active Destination Views
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
    // Return to Galaxy Home
    this.homeBtn.addEventListener('click', () => this.navigateTo('galaxy'));

    document.addEventListener('click', (e) => {
      const backBtn = e.target.closest('[data-back-to-galaxy="true"]');
      if (backBtn) {
        this.navigateTo('galaxy');
      }
    });

    // Motion Reduction Toggle
    let isReduced = false;
    this.motionBtn.addEventListener('click', () => {
      isReduced = !isReduced;
      this.galaxy.setReducedMotion(isReduced);
      this.motionBtn.style.opacity = isReduced ? '0.5' : '1';
    });

    // Sound Toggle
    this.soundBtn.addEventListener('click', () => {
      const playing = this.audioEngine.toggle();
      this.soundBtn.style.opacity = playing ? '1' : '0.6';
    });

    // Mobile Drawer Controls
    if (this.mobileMenuBtn) {
      this.mobileMenuBtn.addEventListener('click', () => this.openMobileDrawer());
    }
    if (this.closeDrawerBtn) {
      this.closeDrawerBtn.addEventListener('click', () => this.closeMobileDrawer());
    }

    // Mobile Drawer Card Navigation
    const mobileCards = document.querySelectorAll('.mobile-nav-card');
    mobileCards.forEach(card => {
      card.addEventListener('click', () => {
        const dest = card.getAttribute('data-dest');
        this.navigateTo(dest);
      });
    });

    // Keyboard Help Modal Controls
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
    if (closeKbBtn) closeKbBtn.addEventListener('click', toggleHelpModal);

    // Keyboard Shortcuts (1=Work, 2=Data, 3=Experiments, 4=About, ESC=Galaxy, M=Motion, S=Sound, ?=Help)
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
        this.motionBtn.click();
      } else if (e.key === 's' || e.key === 'S') {
        this.soundBtn.click();
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

// Start application on DOM ready
document.addEventListener('DOMContentLoaded', () => {
  window.app = new GalaxyPortfolioApp();
});
