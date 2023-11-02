import VirtualKeyboard from './keyboard';
import createElementWithProperties from './utils';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  renderElements() {
    this.keyboardList = createElementWithProperties('ul', 'keyboard');
    this.textarea = createElementWithProperties('textarea', 'keyboard-area', { rows: 5, cols: 60 });
    this.body.append(this.textarea);
    this.body.append(this.keyboardList);
    this.virtualKeyboard = new VirtualKeyboard(this.keyboardList, this.textarea);
    this.virtualKeyboard.renderKeys();
  }
}

export default App;
