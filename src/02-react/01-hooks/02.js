const μReact = (function () {
  function useState(initialState) {
    let _state = initialState;
    const state = () => _state;
    const setState = (newState) => {
      _state = newState;
    };

    return [state, setState];
  }

  function render(Component, props) {
    const component = Component(props);

    component.render();

    return component;
  }

  return { render, useState };
})();

function Component() {
  const [state, setState] = μReact.useState(0);
  return {
    render: () => {
      console.log("Hello Component!");
      console.log("Initial state: ", state());
      setState(2);
      console.log("Updated state: ", state());
    }
  };
}

μReact.render(Component);
