import createElementWithProperties from './utils';

class Background {
  constructor(body) {
    this.body = body;
    this.layersNumber = 6;
    this.layers = [];
    this.renderElements();
    this.bindMouseListener();
  }

  renderElements() {
    this.section = createElementWithProperties('section', 'layers');
    const title = createElementWithProperties('h1', 'layers__title');
    title.innerText = 'Virtual Keyboard';
    this.layersList = createElementWithProperties('div', 'layers__list');
    const canvas = createElementWithProperties('canvas', 'rain');
    this.section.append(this.layersList);
    for (let i = 1; i <= this.layersNumber; i += 1) {
      const layer = createElementWithProperties('div', `layer__item layer__item_${i}`);
      this.layers.push(layer);
      if (i === 3) layer.append(title);
      if (i === 4) layer.append(canvas);
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
