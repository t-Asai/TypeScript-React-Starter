import * as React from "react";
import { EmbedToLayout } from "~/hoc/Layout";

const TextDiff = ({
  baseText,
  nextText,
  updateBaseText,
  updateNextText
}: any) => (
  <div>
    <div>{`${baseText}`}</div>
    <div>{`${nextText}`}</div>

    <textarea onChange={event => updateBaseText(event.target.value)} />
    <textarea onChange={event => updateNextText(event.target.value)} />
  </div>
);

export default EmbedToLayout(TextDiff);
