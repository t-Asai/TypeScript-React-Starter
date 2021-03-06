import * as React from "react";
import { EmbedToLayout } from "~/hoc/Layout";

interface Props {
  name: string;
  enthusiasm: number;
  incrementEnthusiasm: () => void;
  decrementEnthusiasm: () => void;
  updateName: (text: string) => void;
}

// helpers
const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

const Hello = ({
  name = "anonimous",
  enthusiasm = 1,
  incrementEnthusiasm,
  decrementEnthusiasm,
  updateName
}: Props) => (
  <div>
    <div>Hello {`${name}${getExclamationMarks(enthusiasm)}`}</div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
    <div>
      <button onClick={decrementEnthusiasm}>-</button>
      <button onClick={incrementEnthusiasm}>+</button>
      <textarea onChange={event => updateName(event.target.value)} />
    </div>
  </div>
);

export default EmbedToLayout(Hello);
