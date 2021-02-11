import μReactDOM from "./μReactDOM";

const render = μReactDOM.render;

let _node, _component;

μReactDOM.render = (node, component) => {
  _node = node;
  _component = component;
  render(node, component);
};

export function forceUpdate() {
  document.body.removeChild(_node);
  _node = document.createElement("div");
  document.body.appendChild(_node);
  μReactDOM.render(_node, _component);
}
