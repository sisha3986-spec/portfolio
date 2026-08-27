/**
 * ABOUT DESTINATION COMPONENT
 * Renders the quiet serene moon environment revealing creator trait pills,
 * human introduction, philosophy, and authentic background.
 */

import { CREATOR_PROFILE } from '../data/projectsData.js';

export class AboutDestination {
  constructor(containerElement) {
    this.container = containerElement;
    this.render();
  }

  render() {
    this.container.innerHTML = `
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
}
