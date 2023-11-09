import { createElementWithProperties } from './utils';
import Rain from './rain';

class Background {
  constructor(body) {
    this.body = body;
    this.layersNumber = 5;
    this.renderElements();
    this.bindMouseListener();
  }

  renderElements() {
    this.section = createElementWithProperties('section', 'layers');
    this.layersList = createElementWithProperties('div', 'layers__list');
    this.section.append(this.layersList);
    for (let i = 1; i <= this.layersNumber; i += 1) {
      const layer = createElementWithProperties('div', `layer__item layer__item_${i}`);
      if (i === 3) {
        this.rain = new Rain(layer);
        this.rain.updateRain();
      }
      this.layersList.append(layer);
    }
    return this.section;
  }

  bindMouseListener() {
    document.addEventListener('mousemove', (e) => this.applyMouseMove(e));
  }

  applyMouseMove(e) {
    this.layersList.style.transform = `rotateY(${(e.clientX - window.innerWidth / 2) * -0.005}deg) rotateX(${(e.clientY - window.innerHeight / 2) * -0.01}deg)`;
  }
}

export default Background;
