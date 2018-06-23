import * as React from "react";
import { ConnectSideBar } from "~/hoc/SideBar";

export interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}

// helpers
const getExclamationMarks = (numChars: number) => Array(numChars + 1).join("!");

const Hello = ({
  name = "anonimous",
  enthusiasmLevel = 1,
  onIncrement,
  onDecrement
}: Props) => {
  return (
    <div className="hello">
      <div className="greeting">
        Hello {name + getExclamationMarks(enthusiasmLevel)}
      </div>
      <div>
        <button onClick={onDecrement}>-</button>
        <button onClick={onIncrement}>+</button>
      </div>
    </div>
  );
};

export default ConnectSideBar(Hello);
