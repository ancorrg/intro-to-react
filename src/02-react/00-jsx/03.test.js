import { μReactDOM } from "./03";

describe.skip("μReactDOM.render", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("p");
  });

  it("should render from string", () => {
    μReactDOM.render("test", node);
    expect(node.outerHTML).toBe("<p>test</p>");
  });

  it("should render from number", () => {
    μReactDOM.render(3, node);
    expect(node.outerHTML).toBe("<p>3</p>");
  });
});
