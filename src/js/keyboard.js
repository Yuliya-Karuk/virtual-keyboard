import Key from './key';
import keyboardKeys from './keyboardKeys';
import keysHandlers from './systemKeyHandlers';

class Keyboard {
  constructor(keyboardList, textarea) {
    this.keyboardList = keyboardList;
    this.textarea = textarea;
    this.cursor = 0;
    this.keyboard = [];
    this.isCapsPressed = false;
    this.shiftKeys = [];

    this.bindAreaListener();
  }

  bindAreaListener() {
    this.textarea.addEventListener('click', () => {
      this.cursor = this.textarea.selectionStart;
    });
  }

  renderKeys() {
    for (let i = 0; i < Object.keys(keyboardKeys).length; i += 1) {
      const keyName = Object.keys(keyboardKeys)[i];
      const newKey = new Key(keyboardKeys[keyName], keyName);
      this.keyboard.push(newKey);
      this.keyboardList.append(newKey.renderKey());
      if (!newKey.systemKey) this.bindPrintKeyListener(newKey);
      if (newKey.systemKey) this.bindSystemKeyListener(newKey);
    }
  }

  bindPrintKeyListener(key) {
    key.button.addEventListener('click', () => this.handlePrintKey(key));
  }

  handlePrintKey(key) {
    this.textarea.value = `${this.textarea.value.slice(0, this.cursor)}${key.value}${this.textarea.value.slice(this.cursor)}`;
    this.cursor += 1;
    if (this.isShiftPressed) this.releaseShiftKey();
  }

  bindSystemKeyListener(key) {
    if (key.name === 'Backspace') {
      key.button.addEventListener('click', () => {
        this.textarea.value = keysHandlers.Backspace(this.textarea, this.cursor);
        this.cursor -= 1;
      });
    }
    if (key.name === 'Tab') {
      key.button.addEventListener('click', () => {
        const tabEnd = this.textarea.selectionEnd;
        this.textarea.value = keysHandlers.Tab(this.textarea, this.cursor);
        this.textarea.selectionEnd = tabEnd + 1;
        this.textarea.selectionStart = this.textarea.selectionEnd;
        this.cursor = this.textarea.selectionStart;
      });
    }
    if (key.name === 'Delete') {
      key.button.addEventListener('click', () => {
        this.textarea.value = keysHandlers.Delete(this.textarea, this.cursor);
      });
    }
    if (key.name === 'Enter') {
      key.button.addEventListener('click', () => {
        this.textarea.value = keysHandlers.Enter(this.textarea, this.cursor);
        this.cursor += 1;
      });
    }
    if (key.name === 'CapsLock') {
      key.button.addEventListener('click', () => this.toggleKeysWithCaps(key));
    }
    if (key.name === 'ShiftLeft' || key.name === 'ShiftRight') {
      this.shiftKeys.push(key);
      key.button.addEventListener('click', () => this.pressShiftKey(key));
    }
  }

  changeKeyCase(isShifted) {
    for (let i = 0; i < this.keyboard.length; i += 1) {
      this.keyboard[i].toggleShift(isShifted);
    }
  }

  pressShiftKey(key) {
    key.button.classList.add('keyboard__button_shifted');
    this.isShiftPressed = true;
    this.changeKeyCase(!this.isCapsPressed);
  }

  releaseShiftKey() {
    for (let i = 0; i < this.shiftKeys.length; i += 1) {
      this.shiftKeys[i].button.classList.remove('keyboard__button_shifted');
    }
    this.isShiftPressed = false;
    this.changeKeyCase(this.isCapsPressed);
  }

  toggleKeysWithCaps(key) {
    key.button.classList.toggle('keyboard__button_shifted');
    this.isCapsPressed = !this.isCapsPressed;
    this.changeKeyCase(this.isCapsPressed);
  }
}

export default Keyboard;
