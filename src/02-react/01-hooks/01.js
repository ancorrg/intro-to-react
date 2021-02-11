const μReact = (function () {
  function render(Component, props) {
    const component = Component(props);

    component.render();

    return component;
  }

  return { render };
})();

function Component() {
  return {
    render: () => console.log("Hello Component!")
  };
}

μReact.render(Component);
