/**
 * AMBIENT GALAXY WEB AUDIO SYNTHESIZER
 * Generates an ultra-subtle ambient harmonic drone when enabled.
 * Pure Web Audio API — zero audio file loading overhead.
 */

export class SpaceAudioEngine {
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

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

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

    // Harmonic deep space drone frequencies (A2, E3, C#4)
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

    // Fade in gently
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
