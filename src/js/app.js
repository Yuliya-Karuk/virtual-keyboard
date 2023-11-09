import VirtualKeyboard from './keyboard';
import createElementWithProperties from './utils';
import Background from './background';

class App {
  constructor() {
    this.body = document.querySelector('body');
  }

  renderElements() {
    this.decoration = new Background(this.body);
    this.content = createElementWithProperties('div', 'content');
    this.keyboardList = createElementWithProperties('ul', 'keyboard');
    this.textarea = createElementWithProperties('textarea', 'keyboard-area', { rows: 5, cols: 60 });
    this.title = createElementWithProperties('h1', 'layers__title');
    this.title.innerText = 'Virtual Keyboard';

    this.body.append(this.decoration.renderElements(), this.content);
    this.content.append(this.title, this.textarea, this.keyboardList);
    this.virtualKeyboard = new VirtualKeyboard(this.keyboardList, this.textarea);
    this.virtualKeyboard.init();
  }
}

export default App;
