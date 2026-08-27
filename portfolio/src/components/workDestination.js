/**
 * WORK DESTINATION COMPONENT
 * Renders individual project discovery cards with 3-tier story tabs (Idea / Build / Experience),
 * previews, tech tags, and live experience deployment links.
 */

import { WORK_PROJECTS } from '../data/projectsData.js';

export class WorkDestination {
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
          <span class="view-tag">SECTOR_01 // CELESTIAL PLANET</span>
          <h1 class="view-title">Discovered Projects</h1>
          <p class="view-subtitle">
            Exploring digital experiences, tailored brand systems, and bespoke web applications.
          </p>
        </header>

        <div class="projects-deck">
          ${WORK_PROJECTS.map(project => this.createProjectCardMarkup(project)).join('')}
        </div>
      </div>
    `;

    this.bindStoryTabs();
  }

  createProjectCardMarkup(project) {
    return `
      <article class="project-card" id="project-${project.id}">
        <div class="project-visual">
          <img 
            src="${project.image}" 
            alt="Preview mockup of ${project.title}" 
            class="project-img" 
            loading="lazy" 
          />
        </div>

        <div class="project-info">
          <span class="project-number">${project.number} // CELESTIAL_PROJECT</span>
          <h2 class="project-title">${project.title}</h2>
          <p class="project-summary">${project.summary}</p>

          <!-- 3-TIER STORY TABS -->
          <div class="project-story-tabs" role="tablist" aria-label="Project details tabs">
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
    `;
  }

  bindStoryTabs() {
    const tabButtons = this.container.querySelectorAll('.tab-btn');
    tabButtons.forEach(btn => {
      const handleTab = (e) => {
        if (e && e.type === 'touchend') e.preventDefault();
        const projectId = btn.getAttribute('data-target');
        const tabType = btn.getAttribute('data-tab');

        // Find parent tablist and deactivate siblings
        const parentList = btn.closest('.project-story-tabs');
        parentList.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        // Update story panel text
        const project = WORK_PROJECTS.find(p => p.id === projectId);
        const panel = this.container.querySelector(`#panel-${projectId}`);
        
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
}
