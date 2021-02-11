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

function Component(props) {
  const [oneState, setOneState] = μReact.useState(2);
  const [anotherState, setAnotherState] = μReact.useState("hello");

  return {
    render: () => {
      console.log(`Hello ${props.name}!`);

      console.log("oneState: ", oneState);
      console.log("anotherState: ", anotherState);
    },
    click: () => {
      console.log("click!");
      setOneState(oneState + 1);
    },
    type: () => {
      console.log("type!");
      setAnotherState(`${anotherState} world!`);
    }
  };
}

{
  const App = μReact.render(Component, { name: "John" });

  App.click(); // state changes triggers re-render...
}

{
  const App = μReact.render(Component, { name: "John" });

  App.type(); // state changes triggers re-render...
}

μReact.render(Component, { name: "John" });
