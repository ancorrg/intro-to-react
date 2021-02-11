import μReact from "./μReact";
import μReactDOM from "./μReactDOM";

const root = document.createElement("div");

root.id = "root";

document.body.appendChild(root);

const Preformatted = ({ value }) => <pre>{JSON.stringify(value, null, 2)}</pre>;

const h1 = μReact.createElement("h1", null, "Hello μReact!");

const App = (props) => (
  <div>
    <h1>Hello μReact!</h1>
    <Preformatted value={props} />
    <Preformatted value={h1} />
  </div>
);

μReactDOM.render(<App count={2} />, root);
