const μReact = (function () {
  let index = 0;
  let hooks = [];

  function useState(initialState) {
    if (!hooks[index]) {
      hooks[index] = initialState;
    }

    const state = hooks[index];
    const closure = (idx) => (newState) => (hooks[idx] = newState);
    const setState = closure(index);

    index += 1;

    return [state, setState];
  }

  function render(Component, props) {
    index = 0;

    const component = Component(props);

    component.render();

    return component;
  }

  return { render, useState };
})();

function Component() {
  if (Math.random() > 0.5) {
    console.log("oops!");
    μReact.useState(2);
  }

  const [state, setState] = μReact.useState("hello");

  return {
    render: () => {
      console.log("state: ", state);
    },
    click: () => {
      setState(`${state} world!`);
    }
  };
}

{
  const App = μReact.render(Component, { name: "John" });

  App.click(); // state changes triggers re-render...
}

μReact.render(Component, { name: "John" });

// Rules of Hooks: https://reactjs.org/docs/hooks-rules.html
