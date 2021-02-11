/** @jsx μReact.createElement */
import { μReact, μReactDOM } from "./07";

describe.skip("μReactDOM.render", () => {
  let node;

  beforeEach(() => {
    node = document.createElement("div");
  });

  it("should render from element with text node children", () => {
    const button = <button className="primary">Click me!</button>;
    // => μReact.createElement("button", props, children)
    /* => {
            "type": "button",
            "props": {
              "className": "primary",
              "children": ["Click me!"]
            }
          } 
     */
    μReactDOM.render(button, node);
    expect(node.outerHTML).toBe(
      '<div><button class="primary">Click me!</button></div>'
    );
  });

  it("should render from element with element node children", () => {
    const button = (
      <button className="primary">
        <i className="fas fa-mouse-pointer"></i>
      </button>
    );
    // => μReact.createElement("button", props, children)
    /* => {
            "type": "button",
            "props": {
              "className": "primary",
              "children": [
                {
                  "type": "i"
                  "props": {
                    "className": "fas fa-mouse-pointer",
                    "children": null
                  }
                }
              ]
            }
          }  
     */
    μReactDOM.render(button, node);
    expect(node.outerHTML).toBe(
      '<div><button class="primary"><i class="fas fa-mouse-pointer"></i></button></div>'
    );
  });

  it("should render from element with children", () => {
    const button = (
      <button className="primary">
        Click me!
        <i className="fas fa-mouse-pointer"></i>
      </button>
    );
    // => μReact.createElement("button", props, children)
    /* => {
            "type": "button",
            "props": {
              "className": "primary",
              "children": [
                "Click me!",
                {
                  "type": "i"
                  "props": {
                    "className": "fas fa-mouse-pointer",
                    "children": null
                  }
                }
              ]
            }
          }  
     */
    μReactDOM.render(button, node);
    expect(node.outerHTML).toBe(
      '<div><button class="primary">Click me!<i class="fas fa-mouse-pointer"></i></button></div>'
    );
  });
});
