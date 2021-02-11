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
    return Component(props);
  }

  return { render, useState };
})();

function Component({ name }) {
  console.log("[Component] render");

  const [oneState, setOneState] = μReact.useState(2);
  const [anotherState, setAnotherState] = μReact.useState(4);

  console.log(`Hello ${name}!`);

  console.log("Initial oneState: ", oneState());
  console.log("Initial anotherState: ", anotherState());

  setOneState(3);
  setAnotherState(6);

  console.log("Updated oneState: ", oneState());
  console.log("Updated anotherState: ", anotherState());
}

μReact.render(Component, { name: "John" });

// What has happened to the state between renders?

μReact.render(Component, { name: "John Doe" });
