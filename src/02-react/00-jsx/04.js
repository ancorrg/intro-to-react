/*
 * Example 04 - Handling object nodes
 */

export const μReact = (function () {
  /*
   * package: react
   * file: ReactElement.js
   * source: https://bit.ly/3p5yXTi
   */
  function createElement(type, props, ...args) {
    const children = args.length ? [].concat(...args) : null;
    return {
      type,
      props: {
        ...(props || {}),
        children
      }
    };
  }

  return {
    createElement
  };
})();

export const μReactDOM = (function () {
  /*
   * package: react-dom
   * file: ReactDOMComponent.js
   * source: https://bit.ly/3tF9pA1
   */
  function createElement(node) {
    if (typeof node === "string" || typeof node === "number") {
      return document.createTextNode(node);
    }

    const element = document.createElement(node.type);

    return element;
  }

  /*
   * package: react-dom
   * file: ReactDOMLegacy.js
   * source: https://bit.ly/3tKtbKo
   */
  function render(component, node) {
    const element = createElement(component);
    node.appendChild(element);
  }

  return {
    render
  };
})();
