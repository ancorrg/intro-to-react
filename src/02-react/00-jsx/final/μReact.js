const μReact = (function () {
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

export default μReact;
