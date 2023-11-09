import { randomNum } from './utils';

class RainDrop {
  constructor(rain) {
    this.x = 0;
    this.y = 0;
    this.width = 1;
    this.height = randomNum(2, 10);
    this.speed = randomNum(0.5, 10);
    this.opacity = Math.random() * 0.5;
    this.rain = rain;
    this.isFlown = false;
  }

  drawDrop() {
    this.rain.context.strokeStyle = `rgba(255, 255, 255, ${this.opacity}`;
    this.rain.context.strokeRect(this.x, this.y, this.width, this.height);
  }

  startDropFlow() {
    this.x = Math.floor(Math.random() * window.innerWidth) + 1;
    this.isFlown = true;
  }

  updateDrop() {
    if (this.isFlown) {
      this.drawDrop();
      this.y += this.speed;
      if (this.y + this.height > this.rain.height) {
        this.returnDrop();
      }
    }
  }

  returnDrop() {
    this.isFlown = false;
    this.y = 0;
    this.startDropFlow();
  }
}

export default RainDrop;
