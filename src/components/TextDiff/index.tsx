import * as React from "react";
import "colors";
import * as jsdiff from "diff";
import { EmbedToLayout } from "~/hoc/Layout";

const TextDiff = ({
  baseText,
  nextText,
  updateBaseText,
  updateNextText
}: any) => {
  const diffText = jsdiff.diffChars(baseText, nextText);
  let color;
  let spans: any = [];

  diffText.forEach((part: any) => {
    color = part.added ? "blue" : part.removed ? "red" : "grey";
    spans.push({ color: color, text: part.value });
  });
  const listItems = spans.map((span: any) => (
    <p style={{ color: span.color }}>{`${span.text}`}</p>
  ));

  return (
    <div>
      <div>{`${baseText}`}</div>
      <div>{`${nextText}`}</div>
      {listItems}

      <textarea onChange={event => updateBaseText(event.target.value)} />
      <textarea onChange={event => updateNextText(event.target.value)} />
    </div>
  );
};

export default EmbedToLayout(TextDiff);
