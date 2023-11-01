import Key from './key';
import keyboardKeys from './keyboardKeys';
import createElementWithProperties from './utils';
import keysHandlers from './systemKeyHandlers';

class App {
  constructor() {
    this.body = document.querySelector('body');
    this.renderEnvironment();
    this.bindAreaListener();
    this.cursor = 0;
  }

  renderEnvironment() {
    this.keyboard = createElementWithProperties('ul', 'keyboard');
    this.textarea = createElementWithProperties('textarea', 'keyboard-area', { rows: 5, cols: 60 });
    this.body.append(this.textarea);
    this.body.append(this.keyboard);
  }

  renderKeys() {
    for (let i = 0; i < Object.keys(keyboardKeys).length; i += 1) {
      const key = Object.keys(keyboardKeys)[i];
      const newKeyboardKey = new Key(keyboardKeys[key], key);
      const li = newKeyboardKey.renderKey();
      this.keyboard.append(li);
      if (!newKeyboardKey.systemKey) this.bindPrintKeyListener(newKeyboardKey);
      if (newKeyboardKey.systemKey) this.bindSystemKeyListener(newKeyboardKey);
    }
  }

  bindPrintKeyListener(key) {
    key.button.addEventListener('click', () => this.handlePrintKey(key));
  }

  handlePrintKey(key) {
    this.textarea.value += `${key.value}`;
    this.cursor += 1;
  }

  bindAreaListener() {
    this.textarea.addEventListener('click', () => {
      this.cursor = this.textarea.selectionStart;
    });
  }

  bindSystemKeyListener(key) {
    if (key.name === 'Backspace') {
      key.button.addEventListener('click', () => {
        this.textarea.value = keysHandlers.Backspace(this.textarea, this.cursor);
        this.cursor -= 1;
      });
    }
  }
}

export default App;
