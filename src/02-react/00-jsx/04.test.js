/** @jsx μReact.createElement */
import { μReact, μReactDOM } from "./04";

describe.skip("μReactDOM.render", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  it("should render from element", () => {
    const button = <button></button>;
    // => μReact.createElement("button", null)
    μReactDOM.render(button, node);
    expect(node.outerHTML).toBe("<div><button></button></div>");
  });
});
