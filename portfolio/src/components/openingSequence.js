/**
 * CINEMATIC OPENING SEQUENCE MODULE
 * Handles the loading stage, deep space ignition, minimal text reveal,
 * and seamless transition into the interactive galaxy experience.
 */

export class OpeningSequence {
  constructor(options = {}) {
    this.loadingScreen = document.getElementById('loading-screen');
    this.introOverlay = document.getElementById('intro-overlay');
    this.introTitle = document.getElementById('intro-title');
    this.introSubtitle = document.getElementById('intro-subtitle');
    this.hudNav = document.getElementById('hud-nav');

    this.onComplete = options.onComplete || (() => {});
  }

  async start() {
    // 1. Simulate asset & shader prep
    await this.delay(1000);

    // 2. Fade out loading screen
    this.loadingScreen.classList.add('fade-out');
    await this.delay(1000);
    this.loadingScreen.style.display = 'none';

    // 3. Show Cinematic Overlay & Typewriter / Reveal
    this.introOverlay.classList.remove('hidden');
    this.introOverlay.classList.add('visible');

    // Type "YOU FOUND ME."
    await this.typeText(this.introTitle, 'YOU FOUND ME.', 90);
    await this.delay(600);

    // Reveal Subtitle: "Welcome to somewhere a little different."
    this.introSubtitle.textContent = 'Welcome to somewhere a little different.';
    this.introSubtitle.classList.add('visible');

    // Hold cinematic moment
    await this.delay(2200);

    // 4. Fade out intro text & reveal HUD navigation
    this.introOverlay.classList.remove('visible');
    await this.delay(1200);
    this.introOverlay.classList.add('hidden');

    this.hudNav.classList.remove('hidden');
    this.hudNav.classList.add('visible');

    // Trigger complete callback to activate interactive galaxy
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
