import μReact from "./μReact";
import μReactDOM from "./μReactDOM";

import { App } from "./App";

const root = document.createElement("div");

document.body.appendChild(root);

μReactDOM.render(root, <App count={2} />);
