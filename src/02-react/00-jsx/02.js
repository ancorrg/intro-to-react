/*
 * Example 03 - Custom JSX pragma
 *
 * https://codesandbox.io/s/react-create-element-tvqf7
 */

export const μReact = (function () {
  function createElement(type, props, ...args) {
    // TODO: make magic happen ✨
    console.log(type, props, args);
  }

  return {
    createElement
  };
})();

/** @jsx μReact.createElement */

const Button = <button className="primary">Click me!</button>;

console.log("Button", Button);
