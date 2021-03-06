export const μReactDOM = (function () {
  function isChildren(name) {
    return /^children/.test(name);
  }

  function setProp(node, name, value) {
    if (name === "className") {
      name = "class";
    }

    node.setAttribute(name, value);
  }

  function setAttributes(node, props = {}) {
    if (!props) {
      return;
    }
    Object.keys(props)
      .filter((prop) => !isChildren(prop))
      .forEach((name) => setProp(node, name, props[name]));
  }

  function isEventProp(name) {
    return /^on/.test(name);
  }

  function extractEventName(name) {
    return name.slice(2).toLowerCase();
  }

  function addEventListeners(node, props = {}) {
    if (!props) {
      return;
    }
    Object.keys(props)
      .filter(isEventProp)
      .forEach((event) =>
        node.addEventListener(extractEventName(event), props[event])
      );
  }

  /*
   * package: react-dom
   * file: ReactDOMComponent.js
   * source: https://bit.ly/3tF9pA1
   */
  function createElement(node) {
    if (typeof node === "string" || typeof node === "number") {
      return document.createTextNode(node);
    }

    if (typeof node.type === "function") {
      return createElement(node.type(node.props));
    }

    const element = document.createElement(node.type);

    setAttributes(element, node.props);

    addEventListeners(element, node.props);

    node.props.children &&
      node.props.children
        .map(createElement)
        .forEach((child) => element.appendChild(child));

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

export default μReactDOM;
