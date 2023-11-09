const Keys = {
  Backquote: { en: { usual: '`', shifted: '~' }, ru: { usual: 'ё', shifted: 'Ё' }, system: 'keyboard__button_system' },
  Digit1: { en: { usual: '1', shifted: '!' }, ru: { usual: '1', shifted: '!' } },
  Digit2: { en: { usual: '2', shifted: '@' }, ru: { usual: '2', shifted: '"' } },
  Digit3: { en: { usual: '3', shifted: '#' }, ru: { usual: '3', shifted: '№' } },
  Digit4: { en: { usual: '4', shifted: '$' }, ru: { usual: '4', shifted: ';' } },
  Digit5: { en: { usual: '5', shifted: '%' }, ru: { usual: '5', shifted: '%' } },
  Digit6: { en: { usual: '6', shifted: '^' }, ru: { usual: '6', shifted: ':' } },
  Digit7: { en: { usual: '7', shifted: '&' }, ru: { usual: '7', shifted: '?' } },
  Digit8: { en: { usual: '8', shifted: '*' }, ru: { usual: '8', shifted: '*' } },
  Digit9: { en: { usual: '9', shifted: '(' }, ru: { usual: '9', shifted: '(' } },
  Digit0: { en: { usual: '0', shifted: ')' }, ru: { usual: '0', shifted: ')' } },
  Minus: { en: { usual: '-', shifted: '_' }, ru: { usual: '-', shifted: '_' } },
  Equal: { en: { usual: '=', shifted: '+' }, ru: { usual: '=', shifted: '+' } },
  Backspace: {
    en: { usual: '←', shifted: '←' }, ru: { usual: '←', shifted: '←' }, system: 'keyboard__button_system', size: 'keyboard__button_first',
  },
  Delete: { en: { usual: 'Del', shifted: 'Del' }, ru: { usual: 'Del', shifted: 'Del' }, system: 'keyboard__button_system' },

  Tab: {
    en: { usual: 'Tab ⇥', shifted: 'Tab ⇥' }, ru: { usual: 'Tab ⇥', shifted: 'Tab ⇥' }, system: 'keyboard__button_system', size: 'keyboard__button_second',
  },
  KeyQ: { en: { usual: 'q', shifted: 'Q' }, ru: { usual: 'й', shifted: 'Й' } },
  KeyW: { en: { usual: 'w', shifted: 'W' }, ru: { usual: 'ц', shifted: 'Ц' } },
  KeyE: { en: { usual: 'e', shifted: 'E' }, ru: { usual: 'у', shifted: 'У' } },
  KeyR: { en: { usual: 'r', shifted: 'R' }, ru: { usual: 'к', shifted: 'К' } },
  KeyT: { en: { usual: 't', shifted: 'T' }, ru: { usual: 'е', shifted: 'Е' } },
  KeyY: { en: { usual: 'y', shifted: 'Y' }, ru: { usual: 'н', shifted: 'Н' } },
  KeyU: { en: { usual: 'u', shifted: 'U' }, ru: { usual: 'г', shifted: 'Г' } },
  KeyI: { en: { usual: 'i', shifted: 'I' }, ru: { usual: 'ш', shifted: 'Ш' } },
  KeyO: { en: { usual: 'o', shifted: 'O' }, ru: { usual: 'щ', shifted: 'Щ' } },
  KeyP: { en: { usual: 'p', shifted: 'P' }, ru: { usual: 'з', shifted: 'З' } },
  BracketLeft: { en: { usual: '[', shifted: '{' }, ru: { usual: 'х', shifted: 'Х' } },
  BracketRight: { en: { usual: ']', shifted: '}' }, ru: { usual: 'ъ', shifted: 'Ъ' } },
  Backslash: { en: { usual: '\\', shifted: '|' }, ru: { usual: '\\', shifted: '/' }, size: 'keyboard__button_third' },

  CapsLock: {
    en: { usual: 'CapsLock', shifted: 'CapsLock' }, ru: { usual: 'CapsLock', shifted: 'CapsLock' }, system: 'keyboard__button_system', size: 'keyboard__button_fourth',
  },
  KeyA: { en: { usual: 'a', shifted: 'A' }, ru: { usual: 'ф', shifted: 'Ф' } },
  KeyS: { en: { usual: 's', shifted: 'S' }, ru: { usual: 'ы', shifted: 'Ы' } },
  KeyD: { en: { usual: 'd', shifted: 'D' }, ru: { usual: 'в', shifted: 'В' } },
  KeyF: { en: { usual: 'f', shifted: 'F' }, ru: { usual: 'а', shifted: 'А' } },
  KeyG: { en: { usual: 'g', shifted: 'G' }, ru: { usual: 'п', shifted: 'П' } },
  KeyH: { en: { usual: 'h', shifted: 'H' }, ru: { usual: 'р', shifted: 'Р' } },
  KeyJ: { en: { usual: 'j', shifted: 'J' }, ru: { usual: 'о', shifted: 'О' } },
  KeyK: { en: { usual: 'k', shifted: 'K' }, ru: { usual: 'л', shifted: 'Л' } },
  KeyL: { en: { usual: 'l', shifted: 'L' }, ru: { usual: 'д', shifted: 'Д' } },
  Semicolon: { en: { usual: ';', shifted: ':' }, ru: { usual: 'ж', shifted: 'Ж' } },
  Quote: { en: { usual: "'", shifted: '"' }, ru: { usual: 'э', shifted: 'Э' } },
  Enter: {
    en: { usual: 'Enter ↩', shifted: 'Enter ↩' }, ru: { usual: 'Enter ↩', shifted: 'Enter ↩' }, system: 'keyboard__button_system', size: 'keyboard__button_fifth',
  },

  ShiftLeft: {
    en: { usual: '⇧ Shift', shifted: '⇧ Shift' }, ru: { usual: '⇧ Shift', shifted: '⇧ Shift' }, system: 'keyboard__button_system', size: 'keyboard__button_fifth',
  },
  KeyZ: { en: { usual: 'z', shifted: 'Z' }, ru: { usual: 'я', shifted: 'Я' } },
  KeyX: { en: { usual: 'x', shifted: 'X' }, ru: { usual: 'ч', shifted: 'Ч' } },
  KeyC: { en: { usual: 'c', shifted: 'C' }, ru: { usual: 'с', shifted: 'С' } },
  KeyV: { en: { usual: 'v', shifted: 'V' }, ru: { usual: 'м', shifted: 'М' } },
  KeyB: { en: { usual: 'b', shifted: 'B' }, ru: { usual: 'и', shifted: 'И' } },
  KeyN: { en: { usual: 'n', shifted: 'N' }, ru: { usual: 'т', shifted: 'Т' } },
  KeyM: { en: { usual: 'm', shifted: 'M' }, ru: { usual: 'ь', shifted: 'Ь' } },
  Comma: { en: { usual: ',', shifted: '<' }, ru: { usual: 'б', shifted: 'Б' } },
  Period: { en: { usual: '.', shifted: '>' }, ru: { usual: 'ю', shifted: 'Ю' } },
  Slash: { en: { usual: '/', shifted: '?' }, ru: { usual: '.', shifted: ',' } },
  ArrowUp: { en: { usual: '↑', shifted: '↑' }, ru: { usual: '↑', shifted: '↑' }, system: 'keyboard__button_system' },
  ShiftRight: {
    en: { usual: '⇧ Shift', shifted: '⇧ Shift' }, ru: { usual: '⇧ Shift', shifted: '⇧ Shift' }, system: 'keyboard__button_system', size: 'keyboard__button_fourth',
  },

  ControlLeft: {
    en: { usual: '⌃ Ctrl', shifted: '⌃ Ctrl' }, ru: { usual: '⌃ Ctrl', shifted: '⌃ Ctrl' }, system: 'keyboard__button_system', size: 'keyboard__button_first',
  },
  MetaLeft: {
    en: { usual: '⊞ Win', shifted: '⊞ Win' }, ru: { usual: '⊞ Win', shifted: '⊞ Win' }, system: 'keyboard__button_system', size: 'keyboard__button_first',
  },
  AltLeft: {
    en: { usual: '⌥ Alt', shifted: '⌥ Alt' }, ru: { usual: '⌥ Alt', shifted: '⌥ Alt' }, system: 'keyboard__button_system', size: 'keyboard__button_first',
  },
  Space: { en: { usual: ' ', shifted: ' ' }, ru: { usual: ' ', shifted: ' ' }, size: 'keyboard__button_six' },
  AltRight: {
    en: { usual: '⌥ Alt', shifted: '⌥ Alt' }, ru: { usual: '⌥ Alt', shifted: '⌥ Alt' }, system: 'keyboard__button_system', size: 'keyboard__button_first',
  },
  ArrowLeft: { en: { usual: '<-', shifted: '<-' }, ru: { usual: '<-', shifted: '<-' }, system: 'keyboard__button_system' },
  ArrowDown: { en: { usual: '↓', shifted: '↓' }, ru: { usual: '↓', shifted: '↓' }, system: 'keyboard__button_system' },
  ArrowRight: { en: { usual: '->', shifted: '->' }, ru: { usual: '->', shifted: '->' }, system: 'keyboard__button_system' },
  ControlRight: { en: { usual: '⌃ Ctrl', shifted: '⌃ Ctrl' }, ru: { usual: '⌃ Ctrl', shifted: '⌃ Ctrl' }, system: 'keyboard__button_system' },
};

export default Keys;
