/** @jsx μReact.createElement */
import { μReact, μReactDOM } from "./05";

describe.skip("μReactDOM.render", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  it("should render from element with props", () => {
    const button = <button className="primary"></button>;
    // => μReact.createElement("button", props)
    /* => {
            "type": "button",
            "props": {
              "className": "primary",
              "children": null
            }
          } 
     */
    μReactDOM.render(button, node);
    expect(node.outerHTML).toBe('<div><button class="primary"></button></div>');
  });
});
