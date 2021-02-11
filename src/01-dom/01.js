/* Create button element */
const button = document.createElement("button");
const text = document.createTextNode("Hello button!");

button.appendChild(text);

function clickListener() {
  alert("Hello event listener!");
}

/*
 * EventTarget.addEventListener
 * MDN: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener
 */

// button.addEventListener("click", clickListener);

/*
 * EventTarget.removeEventListener
 * MDN: https://developer.mozilla.org/es/docs/Web/API/EventTarget/removeEventListener
 */

// button.removeEventListener("click", clickListener);

/* Add button to the document body */

document.body.appendChild(button);
