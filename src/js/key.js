import createElementWithProperties from './utils';

class Key {
  constructor(data) {
    this.enValue = data.en.usual;
    this.enShifted = data.en.shifted;
    this.ruValue = data.ru.usual;
    this.ruShifted = data.ru.shifted;
    this.value = this.enValue;
    this.systemKey = data.system;
  }

  renderKey() {
    const li = createElementWithProperties('li', 'keyboard__item');
    const button = createElementWithProperties('button', 'keyboard__button');
    if (this.systemKey) {
      for (let i = 0; i < this.systemKey.length; i += 1) {
        button.classList.add(this.systemKey[i]);
      }
    }
    const topSpan = createElementWithProperties('span', 'keyboard__top');
    const bottomSpan = createElementWithProperties('span', 'keyboard__bottom');
    const keyValue = createElementWithProperties('div', 'keyboard__label');
    keyValue.innerText = this.value;
    button.append(topSpan, bottomSpan, keyValue);
    li.append(button);
    return li;
  }
}

export default Key;
