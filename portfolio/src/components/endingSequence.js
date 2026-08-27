/**
 * ENDING SEQUENCE & CONTACT COMPONENT
 * Renders the galaxy finale experience & Direct Email Contact Form for website creation.
 */

import { CREATOR_PROFILE } from '../data/projectsData.js';

export class EndingSequence {
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

      <div id="copy-toast" class="copy-toast" role="status" aria-live="polite">
        Opening Gmail compose window...
      </div>
    `;

    this.bindEvents();
  }

  bindEvents() {
    const form = this.container.querySelector('#direct-email-form');
    const mailtoBtn = this.container.querySelector('#send-mailto-btn');
    const copyBtn = this.container.querySelector('#copy-email-btn');
    const toast = this.container.querySelector('#copy-toast');

    const getFormData = () => {
      const name = this.container.querySelector('#client-name').value.trim() || 'Valued Client';
      const phone = this.container.querySelector('#client-phone').value.trim() || 'Not specified';
      const email = this.container.querySelector('#client-email').value.trim() || 'Not specified';
      const business = this.container.querySelector('#business-name').value.trim() || 'Custom Business';
      const type = this.container.querySelector('#website-type').value;
      const message = this.container.querySelector('#client-message').value.trim() || 'No additional details specified.';

      const subjectRaw = `Website Inquiry: ${type} - ${name} (${business})`;
      const bodyRaw = `Hello Isha,\n\nMy name is ${name}.\nPhone/WhatsApp: ${phone}\nEmail: ${email}\nBusiness/Location: ${business}\nWebsite Category: ${type}\n\nCustomisation & Project Details:\n${message}\n\nBest regards,\n${name}`;

      return { name, phone, email, business, type, message, subjectRaw, bodyRaw };
    };

    const returnToGalaxyHome = () => {
      setTimeout(() => {
        const backHomeBtn = this.container.querySelector('[data-back-to-galaxy="true"]') || document.getElementById('galaxy-home-btn');
        if (backHomeBtn) backHomeBtn.click();
      }, 1200);
    };

    if (form) {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const data = getFormData();
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=auraviastudio05@gmail.com&su=${encodeURIComponent(data.subjectRaw)}&body=${encodeURIComponent(data.bodyRaw)}`;

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
}
