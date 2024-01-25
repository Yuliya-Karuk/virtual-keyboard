/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/app.js":
/*!***********************!*\
  !*** ./src/js/app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _keyboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./keyboard */ "./src/js/keyboard.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _background__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./background */ "./src/js/background.js");



class App {
  constructor() {
    this.body = document.querySelector('body');
  }
  renderElements() {
    this.decoration = new _background__WEBPACK_IMPORTED_MODULE_2__["default"](this.body);
    this.content = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElementWithProperties)('div', 'content');
    this.keyboardList = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElementWithProperties)('ul', 'keyboard');
    this.textarea = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElementWithProperties)('textarea', 'keyboard-area', {
      rows: 5,
      cols: 60
    });
    this.title = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElementWithProperties)('h1', 'title');
    this.title.innerText = 'Virtual Keyboard';
    const description = (0,_utils__WEBPACK_IMPORTED_MODULE_1__.createElementWithProperties)('p', 'description');
    description.innerText = 'Keyboard for Windows, switch language - Ctrl + Alt';
    this.body.append(this.decoration.renderElements(), this.content);
    this.content.append(this.title, this.textarea, this.keyboardList, description);
    this.virtualKeyboard = new _keyboard__WEBPACK_IMPORTED_MODULE_0__["default"](this.keyboardList, this.textarea);
    this.virtualKeyboard.init();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (App);

/***/ }),

/***/ "./src/js/background.js":
/*!******************************!*\
  !*** ./src/js/background.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _rain__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rain */ "./src/js/rain.js");


class Background {
  constructor(body) {
    this.body = body;
    this.layersNumber = 5;
    this.renderElements();
    this.bindMouseListener();
  }
  renderElements() {
    this.section = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('section', 'layers');
    this.layersList = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'layers__list');
    this.section.append(this.layersList);
    for (let i = 1; i <= this.layersNumber; i += 1) {
      const layer = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', `layer__item layer__item_${i}`);
      if (i === 3) {
        this.rain = new _rain__WEBPACK_IMPORTED_MODULE_1__["default"](layer);
        this.rain.updateRain();
      }
      this.layersList.append(layer);
    }
    return this.section;
  }
  bindMouseListener() {
    document.addEventListener('mousemove', e => this.applyMouseMove(e));
  }
  applyMouseMove(e) {
    this.layersList.style.transform = `rotateY(${(e.clientX - window.innerWidth / 2) * -0.005}deg) rotateX(${(e.clientY - window.innerHeight / 2) * -0.01}deg)`;
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Background);

/***/ }),

/***/ "./src/js/key.js":
/*!***********************!*\
  !*** ./src/js/key.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

class Key {
  constructor(data, name, language) {
    this.name = name;
    // this.firstLang = data.en;
    // this.secondLang = data.ru;
    // this.language = this.firstLang;
    // this.usualValue = this.language.usual;
    // this.shiftedValue = this.language.shifted;
    // this.value = this.usualValue;
    this.language = language;
    this.data = data;
    this.usualValue = this.data[this.language].usual;
    this.shiftedValue = this.data[this.language].shifted;
    this.value = this.usualValue;
    this.size = data.size;
    this.systemKey = data.system;
    this.isPressed = false;
  }
  renderKey() {
    const li = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('li', 'keyboard__item');
    this.button = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('button', 'keyboard__button');
    if (this.size) this.button.classList.add(this.size);
    if (this.systemKey) this.button.classList.add(this.systemKey);
    const topSpan = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'keyboard__top');
    const bottomSpan = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('span', 'keyboard__bottom');
    this.buttonLabel = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('div', 'keyboard__label');
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
    this.language = lang;
    this.usualValue = this.data[this.language].usual;
    this.shiftedValue = this.data[this.language].shifted;
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Key);

/***/ }),

/***/ "./src/js/keyboard.js":
/*!****************************!*\
  !*** ./src/js/keyboard.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _key__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./key */ "./src/js/key.js");
/* harmony import */ var _keyboardKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./keyboardKeys */ "./src/js/keyboardKeys.js");
/* harmony import */ var _systemKeyHandlers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./systemKeyHandlers */ "./src/js/systemKeyHandlers.js");



class VirtualKeyboard {
  constructor(keyboardList, textarea) {
    this.keyboardList = keyboardList;
    this.textarea = textarea;
    this.cursor = 0;
    this.keyboard = [];
    this.isCapsPressed = false;
    this.shiftKeys = [];
    this.firstLang = true;
    this.language = 'en';
  }
  init() {
    this.checkLanguage();
    this.renderKeys();
    this.bindAreaListener();
    this.bindRealKeyboardListeners();
  }
  bindAreaListener() {
    this.textarea.addEventListener('click', () => {
      this.cursor = this.textarea.selectionStart;
    });
  }
  renderKeys() {
    for (let i = 0; i < Object.keys(_keyboardKeys__WEBPACK_IMPORTED_MODULE_1__["default"]).length; i += 1) {
      const keyName = Object.keys(_keyboardKeys__WEBPACK_IMPORTED_MODULE_1__["default"])[i];
      const newKey = new _key__WEBPACK_IMPORTED_MODULE_0__["default"](_keyboardKeys__WEBPACK_IMPORTED_MODULE_1__["default"][keyName], keyName, this.language);
      this.keyboard.push(newKey);
      this.keyboardList.append(newKey.renderKey());
      if (newKey.name === 'ShiftLeft' || newKey.name === 'ShiftRight') {
        this.shiftKeys.push(newKey);
      }
      if (!newKey.systemKey) this.bindPrintKeyListener(newKey);
      if (newKey.systemKey) this.bindSystemKeyListener(newKey);
    }
  }
  bindPrintKeyListener(key) {
    key.button.addEventListener('click', () => this.handlePrintKey(key));
  }
  checkLanguage() {
    if (localStorage.getItem('keyboardLang')) {
      this.language = localStorage.getItem('keyboardLang');
      this.firstLang = this.language === 'en';
    } else {
      localStorage.setItem('keyboardLang', this.language);
    }
  }
  handlePrintKey(key) {
    this.textarea.value = `${this.textarea.value.slice(0, this.cursor)}${key.value}${this.textarea.value.slice(this.cursor)}`;
    this.cursor += 1;
    if (this.isShiftPressed) this.releaseShiftKey();
    this.textarea.focus();
    this.textarea.setSelectionRange(this.cursor, this.cursor);
  }
  bindSystemKeyListener(key) {
    key.button.addEventListener('click', () => this.handleSystemKey(key));
  }
  handleSystemKey(key) {
    if (key.name === 'Backspace') this.handleBackspace();
    if (key.name === 'Tab') this.handleTab();
    if (key.name === 'Delete') this.handleDelete();
    if (key.name === 'Enter') this.handleEnter();
    if (key.name === 'CapsLock') this.toggleKeysWithCaps(key);
    if (key.name === 'ShiftLeft' || key.name === 'ShiftRight') this.pressShiftKey(key);
    if (key.name === 'ArrowDown') this.move('forward', 'line');
    if (key.name === 'ArrowUp') this.move('backward', 'line');
    if (key.name === 'ArrowRight') this.move('forward', 'character');
    if (key.name === 'ArrowLeft') this.move('backward', 'character');
    this.textarea.focus();
  }
  handleBackspace() {
    this.textarea.value = _systemKeyHandlers__WEBPACK_IMPORTED_MODULE_2__["default"].Backspace(this.textarea, this.cursor);
    this.cursor -= 1;
  }
  handleTab() {
    const tabEnd = this.textarea.selectionEnd;
    this.textarea.value = _systemKeyHandlers__WEBPACK_IMPORTED_MODULE_2__["default"].Tab(this.textarea, this.cursor);
    this.textarea.selectionEnd = tabEnd + 1;
    this.textarea.selectionStart = this.textarea.selectionEnd;
    this.cursor = this.textarea.selectionStart;
  }
  handleDelete() {
    this.textarea.value = _systemKeyHandlers__WEBPACK_IMPORTED_MODULE_2__["default"].Delete(this.textarea, this.cursor);
  }
  handleEnter() {
    this.textarea.value = _systemKeyHandlers__WEBPACK_IMPORTED_MODULE_2__["default"].Enter(this.textarea, this.cursor);
    this.cursor += 1;
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
  bindRealKeyboardListeners() {
    document.addEventListener('keydown', e => this.handleKeyDown(e));
    document.addEventListener('keyup', e => this.handleKeyUp(e));
  }
  handleKeyDown(e) {
    if (!e.ctrlKey) {
      e.preventDefault();
    }
    if (e.code === 'AltLeft' && e.ctrlKey || e.code === 'ControlLeft' && e.altKey) {
      this.changeLang();
    }
    for (let i = 0; i < this.keyboard.length; i += 1) {
      if (e.code === this.keyboard[i].name) {
        if (e.code !== 'CapsLock') this.keyboard[i].press();
      }
    }
  }
  changeLang() {
    this.firstLang = !this.firstLang;
    if (this.firstLang) this.language = 'en';
    if (!this.firstLang) this.language = 'ru';
    localStorage.setItem('keyboardLang', this.language);
    for (let i = 0; i < this.keyboard.length; i += 1) {
      this.keyboard[i].toggleLanguage(this.language);
    }
  }
  handleKeyUp(e) {
    for (let i = 0; i < this.keyboard.length; i += 1) {
      if (e.code === this.keyboard[i].name) {
        if (!e.ctrlKey) {
          this.keyboard[i].button.click();
        }
        if (e.code !== 'CapsLock') this.keyboard[i].unpress();
        this.textarea.focus();
      }
    }
  }
  move(direction, type) {
    const selection = window.getSelection();
    selection.modify('move', direction, type);
    this.cursor = this.textarea.selectionStart;
    this.textarea.focus();
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (VirtualKeyboard);

/***/ }),

/***/ "./src/js/keyboardKeys.js":
/*!********************************!*\
  !*** ./src/js/keyboardKeys.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const Keys = {
  Backquote: {
    en: {
      usual: '`',
      shifted: '~'
    },
    ru: {
      usual: 'ё',
      shifted: 'Ё'
    },
    system: 'keyboard__button_system'
  },
  Digit1: {
    en: {
      usual: '1',
      shifted: '!'
    },
    ru: {
      usual: '1',
      shifted: '!'
    }
  },
  Digit2: {
    en: {
      usual: '2',
      shifted: '@'
    },
    ru: {
      usual: '2',
      shifted: '"'
    }
  },
  Digit3: {
    en: {
      usual: '3',
      shifted: '#'
    },
    ru: {
      usual: '3',
      shifted: '№'
    }
  },
  Digit4: {
    en: {
      usual: '4',
      shifted: '$'
    },
    ru: {
      usual: '4',
      shifted: ';'
    }
  },
  Digit5: {
    en: {
      usual: '5',
      shifted: '%'
    },
    ru: {
      usual: '5',
      shifted: '%'
    }
  },
  Digit6: {
    en: {
      usual: '6',
      shifted: '^'
    },
    ru: {
      usual: '6',
      shifted: ':'
    }
  },
  Digit7: {
    en: {
      usual: '7',
      shifted: '&'
    },
    ru: {
      usual: '7',
      shifted: '?'
    }
  },
  Digit8: {
    en: {
      usual: '8',
      shifted: '*'
    },
    ru: {
      usual: '8',
      shifted: '*'
    }
  },
  Digit9: {
    en: {
      usual: '9',
      shifted: '('
    },
    ru: {
      usual: '9',
      shifted: '('
    }
  },
  Digit0: {
    en: {
      usual: '0',
      shifted: ')'
    },
    ru: {
      usual: '0',
      shifted: ')'
    }
  },
  Minus: {
    en: {
      usual: '-',
      shifted: '_'
    },
    ru: {
      usual: '-',
      shifted: '_'
    }
  },
  Equal: {
    en: {
      usual: '=',
      shifted: '+'
    },
    ru: {
      usual: '=',
      shifted: '+'
    }
  },
  Backspace: {
    en: {
      usual: '←',
      shifted: '←'
    },
    ru: {
      usual: '←',
      shifted: '←'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_first'
  },
  Delete: {
    en: {
      usual: 'Del',
      shifted: 'Del'
    },
    ru: {
      usual: 'Del',
      shifted: 'Del'
    },
    system: 'keyboard__button_system'
  },
  Tab: {
    en: {
      usual: 'Tab ⇥',
      shifted: 'Tab ⇥'
    },
    ru: {
      usual: 'Tab ⇥',
      shifted: 'Tab ⇥'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_second'
  },
  KeyQ: {
    en: {
      usual: 'q',
      shifted: 'Q'
    },
    ru: {
      usual: 'й',
      shifted: 'Й'
    }
  },
  KeyW: {
    en: {
      usual: 'w',
      shifted: 'W'
    },
    ru: {
      usual: 'ц',
      shifted: 'Ц'
    }
  },
  KeyE: {
    en: {
      usual: 'e',
      shifted: 'E'
    },
    ru: {
      usual: 'у',
      shifted: 'У'
    }
  },
  KeyR: {
    en: {
      usual: 'r',
      shifted: 'R'
    },
    ru: {
      usual: 'к',
      shifted: 'К'
    }
  },
  KeyT: {
    en: {
      usual: 't',
      shifted: 'T'
    },
    ru: {
      usual: 'е',
      shifted: 'Е'
    }
  },
  KeyY: {
    en: {
      usual: 'y',
      shifted: 'Y'
    },
    ru: {
      usual: 'н',
      shifted: 'Н'
    }
  },
  KeyU: {
    en: {
      usual: 'u',
      shifted: 'U'
    },
    ru: {
      usual: 'г',
      shifted: 'Г'
    }
  },
  KeyI: {
    en: {
      usual: 'i',
      shifted: 'I'
    },
    ru: {
      usual: 'ш',
      shifted: 'Ш'
    }
  },
  KeyO: {
    en: {
      usual: 'o',
      shifted: 'O'
    },
    ru: {
      usual: 'щ',
      shifted: 'Щ'
    }
  },
  KeyP: {
    en: {
      usual: 'p',
      shifted: 'P'
    },
    ru: {
      usual: 'з',
      shifted: 'З'
    }
  },
  BracketLeft: {
    en: {
      usual: '[',
      shifted: '{'
    },
    ru: {
      usual: 'х',
      shifted: 'Х'
    }
  },
  BracketRight: {
    en: {
      usual: ']',
      shifted: '}'
    },
    ru: {
      usual: 'ъ',
      shifted: 'Ъ'
    }
  },
  Backslash: {
    en: {
      usual: '\\',
      shifted: '|'
    },
    ru: {
      usual: '\\',
      shifted: '/'
    },
    size: 'keyboard__button_third'
  },
  CapsLock: {
    en: {
      usual: 'CapsLock',
      shifted: 'CapsLock'
    },
    ru: {
      usual: 'CapsLock',
      shifted: 'CapsLock'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_fourth'
  },
  KeyA: {
    en: {
      usual: 'a',
      shifted: 'A'
    },
    ru: {
      usual: 'ф',
      shifted: 'Ф'
    }
  },
  KeyS: {
    en: {
      usual: 's',
      shifted: 'S'
    },
    ru: {
      usual: 'ы',
      shifted: 'Ы'
    }
  },
  KeyD: {
    en: {
      usual: 'd',
      shifted: 'D'
    },
    ru: {
      usual: 'в',
      shifted: 'В'
    }
  },
  KeyF: {
    en: {
      usual: 'f',
      shifted: 'F'
    },
    ru: {
      usual: 'а',
      shifted: 'А'
    }
  },
  KeyG: {
    en: {
      usual: 'g',
      shifted: 'G'
    },
    ru: {
      usual: 'п',
      shifted: 'П'
    }
  },
  KeyH: {
    en: {
      usual: 'h',
      shifted: 'H'
    },
    ru: {
      usual: 'р',
      shifted: 'Р'
    }
  },
  KeyJ: {
    en: {
      usual: 'j',
      shifted: 'J'
    },
    ru: {
      usual: 'о',
      shifted: 'О'
    }
  },
  KeyK: {
    en: {
      usual: 'k',
      shifted: 'K'
    },
    ru: {
      usual: 'л',
      shifted: 'Л'
    }
  },
  KeyL: {
    en: {
      usual: 'l',
      shifted: 'L'
    },
    ru: {
      usual: 'д',
      shifted: 'Д'
    }
  },
  Semicolon: {
    en: {
      usual: ';',
      shifted: ':'
    },
    ru: {
      usual: 'ж',
      shifted: 'Ж'
    }
  },
  Quote: {
    en: {
      usual: "'",
      shifted: '"'
    },
    ru: {
      usual: 'э',
      shifted: 'Э'
    }
  },
  Enter: {
    en: {
      usual: 'Enter ↩',
      shifted: 'Enter ↩'
    },
    ru: {
      usual: 'Enter ↩',
      shifted: 'Enter ↩'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_fifth'
  },
  ShiftLeft: {
    en: {
      usual: '⇧ Shift',
      shifted: '⇧ Shift'
    },
    ru: {
      usual: '⇧ Shift',
      shifted: '⇧ Shift'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_fifth'
  },
  KeyZ: {
    en: {
      usual: 'z',
      shifted: 'Z'
    },
    ru: {
      usual: 'я',
      shifted: 'Я'
    }
  },
  KeyX: {
    en: {
      usual: 'x',
      shifted: 'X'
    },
    ru: {
      usual: 'ч',
      shifted: 'Ч'
    }
  },
  KeyC: {
    en: {
      usual: 'c',
      shifted: 'C'
    },
    ru: {
      usual: 'с',
      shifted: 'С'
    }
  },
  KeyV: {
    en: {
      usual: 'v',
      shifted: 'V'
    },
    ru: {
      usual: 'м',
      shifted: 'М'
    }
  },
  KeyB: {
    en: {
      usual: 'b',
      shifted: 'B'
    },
    ru: {
      usual: 'и',
      shifted: 'И'
    }
  },
  KeyN: {
    en: {
      usual: 'n',
      shifted: 'N'
    },
    ru: {
      usual: 'т',
      shifted: 'Т'
    }
  },
  KeyM: {
    en: {
      usual: 'm',
      shifted: 'M'
    },
    ru: {
      usual: 'ь',
      shifted: 'Ь'
    }
  },
  Comma: {
    en: {
      usual: ',',
      shifted: '<'
    },
    ru: {
      usual: 'б',
      shifted: 'Б'
    }
  },
  Period: {
    en: {
      usual: '.',
      shifted: '>'
    },
    ru: {
      usual: 'ю',
      shifted: 'Ю'
    }
  },
  Slash: {
    en: {
      usual: '/',
      shifted: '?'
    },
    ru: {
      usual: '.',
      shifted: ','
    }
  },
  ArrowUp: {
    en: {
      usual: '↑',
      shifted: '↑'
    },
    ru: {
      usual: '↑',
      shifted: '↑'
    },
    system: 'keyboard__button_system'
  },
  ShiftRight: {
    en: {
      usual: '⇧ Shift',
      shifted: '⇧ Shift'
    },
    ru: {
      usual: '⇧ Shift',
      shifted: '⇧ Shift'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_fourth'
  },
  ControlLeft: {
    en: {
      usual: '⌃ Ctrl',
      shifted: '⌃ Ctrl'
    },
    ru: {
      usual: '⌃ Ctrl',
      shifted: '⌃ Ctrl'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_first'
  },
  MetaLeft: {
    en: {
      usual: '⊞ Win',
      shifted: '⊞ Win'
    },
    ru: {
      usual: '⊞ Win',
      shifted: '⊞ Win'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_first'
  },
  AltLeft: {
    en: {
      usual: '⌥ Alt',
      shifted: '⌥ Alt'
    },
    ru: {
      usual: '⌥ Alt',
      shifted: '⌥ Alt'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_first'
  },
  Space: {
    en: {
      usual: ' ',
      shifted: ' '
    },
    ru: {
      usual: ' ',
      shifted: ' '
    },
    size: 'keyboard__button_six'
  },
  AltRight: {
    en: {
      usual: '⌥ Alt',
      shifted: '⌥ Alt'
    },
    ru: {
      usual: '⌥ Alt',
      shifted: '⌥ Alt'
    },
    system: 'keyboard__button_system',
    size: 'keyboard__button_first'
  },
  ArrowLeft: {
    en: {
      usual: '<-',
      shifted: '<-'
    },
    ru: {
      usual: '<-',
      shifted: '<-'
    },
    system: 'keyboard__button_system'
  },
  ArrowDown: {
    en: {
      usual: '↓',
      shifted: '↓'
    },
    ru: {
      usual: '↓',
      shifted: '↓'
    },
    system: 'keyboard__button_system'
  },
  ArrowRight: {
    en: {
      usual: '->',
      shifted: '->'
    },
    ru: {
      usual: '->',
      shifted: '->'
    },
    system: 'keyboard__button_system'
  },
  ControlRight: {
    en: {
      usual: '⌃ Ctrl',
      shifted: '⌃ Ctrl'
    },
    ru: {
      usual: '⌃ Ctrl',
      shifted: '⌃ Ctrl'
    },
    system: 'keyboard__button_system'
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Keys);

/***/ }),

/***/ "./src/js/rain.js":
/*!************************!*\
  !*** ./src/js/rain.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");
/* harmony import */ var _rainDrop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./rainDrop */ "./src/js/rainDrop.js");


class Rain {
  constructor(layer) {
    this.layer = layer;
    this.numberOfDrops = 10;
    this.dropsPull = [];
    this.appendCanvas();
    this.createDropsArray();
  }
  appendCanvas() {
    this.canvas = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.createElementWithProperties)('canvas', 'rain');
    this.canvas.width = window.innerWidth;
    this.canvas.height = window.innerHeight;
    this.height = this.canvas.height;
    this.width = this.canvas.width;
    this.context = this.canvas.getContext('2d');
    this.layer.append(this.canvas);
  }
  createDropsArray() {
    for (let i = 0; i < this.numberOfDrops; i += 1) {
      this.dropsPull.push(new _rainDrop__WEBPACK_IMPORTED_MODULE_1__["default"](this));
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
    this.dropsPull.forEach(drop => {
      drop.updateDrop();
    });
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Rain);

/***/ }),

/***/ "./src/js/rainDrop.js":
/*!****************************!*\
  !*** ./src/js/rainDrop.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils */ "./src/js/utils.js");

class RainDrop {
  constructor(rain) {
    this.x = 0;
    this.y = 0;
    this.width = 1;
    this.height = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomNum)(2, 10);
    this.speed = (0,_utils__WEBPACK_IMPORTED_MODULE_0__.randomNum)(0.5, 10);
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
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (RainDrop);

/***/ }),

/***/ "./src/js/systemKeyHandlers.js":
/*!*************************************!*\
  !*** ./src/js/systemKeyHandlers.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const keysHandlers = {
  Backspace: (textarea, cursor) => {
    const newValue = `${textarea.value.slice(0, cursor - 1)}${textarea.value.slice(cursor)}`;
    return newValue;
  },
  Tab: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}\t${textarea.value.substring(cursor)}`;
    return newValue;
  },
  Delete: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}${textarea.value.substring(cursor + 1)}`;
    return newValue;
  },
  Enter: (textarea, cursor) => {
    const newValue = `${textarea.value.substring(0, cursor)}\n${textarea.value.substring(cursor)}`;
    return newValue;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (keysHandlers);

/***/ }),

/***/ "./src/js/utils.js":
/*!*************************!*\
  !*** ./src/js/utils.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createElementWithProperties: () => (/* binding */ createElementWithProperties),
/* harmony export */   randomNum: () => (/* binding */ randomNum)
/* harmony export */ });
function createElementWithProperties(el, elClassName, attr) {
  const element = document.createElement(el);
  element.className = elClassName;
  if (attr) {
    for (let i = 0; i < Object.keys(attr).length; i += 1) {
      const key = Object.keys(attr)[i];
      element.setAttribute(key, attr[key]);
    }
  }
  return element;
}
function randomNum(min, max) {
  return Math.floor(Math.random() * max) + min;
}

// export default function createElementWithProperties(el, elClassName, parentEl, props, attr) {
//   const element = document.createElement(el);
//   element.className = elClassName;
//   if (props) Object.assign(element, props);
//   if (attr) {
//     for (let i = 0; i < Object.keys(attr).length; i += 1) {
//       const key = Object.keys(attr)[i];
//       element.setAttribute(key, attr[key]);
//     }
//   }
//   parentEl.append(element);
//   return element;
// }

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/app */ "./src/js/app.js");

const newApp = new _js_app__WEBPACK_IMPORTED_MODULE_0__["default"]();
newApp.renderElements();
})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

})();

/******/ })()
;
//# sourceMappingURL=script.js.map