import μReact from "./μReact";
import { useState } from "./μReactDOM";

import { Preformatted } from "./Preformatted";

import { forceUpdate } from "./internals";
import { useBtc } from "./useBtc";

export const App = (props) => {
  const [count, setCount] = useState(props.count);
  const { btc, loadBtc } = useBtc();

  function add() {
    setCount(count + 1, forceUpdate);
  }

  return (
    <div>
      <h1>Hello μReact!</h1>
      <Preformatted value={props} />
      <button onClick={() => add()}>Count: {count}</button>
      <button onClick={() => loadBtc()}>Load BTC</button>
      {btc && (
        <ul>
          {btc.bids.map(({ num, qty, px }) => (
            <li>
              num: {num} | qty: {qty} | px: {px}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
