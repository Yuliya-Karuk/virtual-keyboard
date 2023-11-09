export function createElementWithProperties(el, elClassName, attr) {
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

export function randomNum(min, max) {
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
