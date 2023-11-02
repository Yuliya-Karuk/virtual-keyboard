import createElementWithProperties from './utils';

class Key {
  constructor(data, name) {
    this.name = name;
    this.language = data.en;
    this.secondLang = data.ru;
    this.usualValue = this.language.usual;
    this.shiftedValue = this.language.shifted;
    this.value = this.usualValue;
    this.size = data.size;
    this.systemKey = data.system;
  }

  renderKey() {
    const li = createElementWithProperties('li', 'keyboard__item');
    this.button = createElementWithProperties('button', 'keyboard__button');
    if (this.size) this.button.classList.add(this.size);
    if (this.system) this.button.classList.add(this.system);
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
}

export default Key;
