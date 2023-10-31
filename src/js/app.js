import Key from './key';
import keyboardKeys from './keyboardKeys';
import createElementWithProperties from './utils';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.renderEnvironment();
  }

  renderEnvironment() {
    this.keyboard = createElementWithProperties('ul', 'keyboard');
    this.body.append(this.keyboard);
  }

  renderKeys() {
    for (let i = 0; i < Object.keys(keyboardKeys).length; i += 1) {
      const key = Object.keys(keyboardKeys)[i];
      const newKeyboardKey = new Key(keyboardKeys[key]);
      const li = newKeyboardKey.renderKey();
      this.keyboard.append(li);
    }
  }
}

export default App;
