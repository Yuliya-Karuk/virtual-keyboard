import { createElementWithProperties } from './utils';
import RainDrop from './rainDrop';

class Rain {
  constructor(layer) {
    this.layer = layer;
    this.numberOfDrops = 10;
    this.dropsPull = [];
    this.appendCanvas();
    this.createDropsArray();
  }

  appendCanvas() {
    this.canvas = createElementWithProperties('canvas', 'rain');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.context = this.canvas.getContext('2d');
    this.layer.append(this.canvas);
  }

  createDropsArray() {
    for (let i = 0; i < this.numberOfDrops; i += 1) {
      this.dropsPull.push(new RainDrop(this));
    }
    this.startRain();
  }

  startRain() {
    for (let i = 0; i < this.dropsPull.length; i += 1) {
      this.dropsPull[i].startDropFlow();
    }
  }

  updateRain() {
    const ctx = this;
    ctx.context.clearRect(0, 0, ctx.width, ctx.height);
    ctx.renderRain();

    window.requestAnimationFrame(() => ctx.updateRain());
  }

  renderRain() {
    this.dropsPull.forEach((drop) => {
      drop.updateDrop();
    });
  }
}

export default Rain;
