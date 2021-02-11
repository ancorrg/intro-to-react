import { useState } from "./μReactDOM";

import { forceUpdate } from "./internals";

async function loadBtc(setBtc) {
  const response = await fetch(
    "https://api.blockchain.com/v3/exchange/l2/BTC-USD"
  );
  const json = await response.json();
  setBtc(json, forceUpdate);
}

export function useBtc() {
  const [btc, setBtc] = useState({
    bids: [],
    asks: []
  });

  return {
    btc,
    loadBtc: () => loadBtc(setBtc)
  };
}
