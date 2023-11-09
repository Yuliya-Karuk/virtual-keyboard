import { createElementWithProperties } from './utils';

class Key {
  constructor(data, name) {
    this.name = name;
    this.firstLang = data.en;
    this.secondLang = data.ru;
    this.language = this.firstLang;
    this.usualValue = this.language.usual;
    this.shiftedValue = this.language.shifted;
    this.value = this.usualValue;
    this.size = data.size;
    this.systemKey = data.system;
    this.isPressed = false;
  }

  renderKey() {
    const li = createElementWithProperties('li', 'keyboard__item');
    this.button = createElementWithProperties('button', 'keyboard__button');
    if (this.size) this.button.classList.add(this.size);
    if (this.systemKey) this.button.classList.add(this.systemKey);
    const topSpan = createElementWithProperties('span', 'keyboard__top');
    const bottomSpan = createElementWithProperties('span', 'keyboard__bottom');
    this.buttonLabel = createElementWithProperties('div', 'keyboard__label');
    this.buttonLabel.innerText = this.value;
    this.button.append(topSpan, bottomSpan, this.buttonLabel);
    li.append(this.button);
    return li;
  }

  toggleShift(shift) {
    if (shift) this.value = this.shiftedValue;
    if (!shift) this.value = this.usualValue;
    this.buttonLabel.innerText = this.value;
  }

  toggleLanguage(lang) {
    if (lang) this.language = this.secondLang;
    if (!lang) this.language = this.firstLang;
    this.usualValue = this.language.usual;
    this.shiftedValue = this.language.shifted;
    this.value = this.usualValue;
    this.buttonLabel.innerText = this.value;
  }

  press() {
    this.button.classList.add('keyboard__button_shifted');
    this.isPressed = true;
  }

  unpress() {
    if (this.isPressed) this.button.classList.remove('keyboard__button_shifted');
    this.isPressed = false;
  }
}

export default Key;
