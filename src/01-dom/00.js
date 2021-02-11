/*
 * Document.createElement
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Document/createElement
 */

const button = document.createElement("button");

/*
 * Document.createTextNode
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Document/createTextNode
 */

// const text = document.createTextNode("Hello button!");

/*
 * Element.appendChild
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Node/appendChild
 */

// button.appendChild(text);

/*
 * Node.replaceChild
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Node/replaceChild
 */

// const extraText = document.createTextNode("Extra text node");
// button.appendChild(extraText);

// const replacedText = document.createTextNode("Replaced text node");

// button.replaceChild(replacedText, extraText);

/*
 * Node.removeChild
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Node/removeChild
 */

// button.removeChild(replacedText);

/*
 * Element.setAttribute
 * MDN: https://developer.mozilla.org/es/docs/Web/API/Element/setAttribute
 */

// button.setAttribute("class", "primary");

/* Add button to the document body */

document.body.appendChild(button);
