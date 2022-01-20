const box1 = document.querySelector(".box_1");
const box2 = document.querySelector(".box_2");

const insertText = (wildcard, parameter) => {
  return `<p>${parameter} is: ${wildcard}px</p>`;
};

const setElements = () => {
  box1.innerHTML = insertText(box1.clientWidth, "Width");
  box2.innerHTML = insertText(box1.clientHeight, "Height");
};

setElements();

box1.addEventListener("contextmenu", (event) => {
  event.preventDefault();
  window.alert("Right Click is Disabled");
});

box2.addEventListener("click", (event) => {
  if (event.which === 1) {
    window.alert("Left Click is Disabled");
    return false;
  }
});

const debounce = (func, wait = 100) => {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      func.apply(this, args);
    }, wait);
  };
};

const debounced = debounce(setElements, 200);
window.addEventListener("resize", debounced);
