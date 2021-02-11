/** @jsx μReact.createElement */
import { μReact, μReactDOM } from "./06";

describe.skip("μReactDOM.render", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  it("should render from element with event listeners", () => {
    const listener = jest.fn();
    const button = <button className="primary" onClick={listener}></button>;
    // => μReact.createElement("button", props)
    /* =>  {
              "type": "button",
              "props": {
                "className": "primary"
                "onClick": fn,
                "children": null
              }
            } 
     */
    μReactDOM.render(button, node);

    expect(node.children.length).toBe(1);
    const element = node.children[0];

    expect(element).toBeDefined();
    expect(element.click).toBeDefined();

    element.click();

    expect(listener).toBeCalledTimes(1);
  });
});
