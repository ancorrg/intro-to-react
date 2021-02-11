import μReact from "./μReact";

export const Preformatted = ({ value }) => (
  <pre>{JSON.stringify(value, null, 2)}</pre>
);
