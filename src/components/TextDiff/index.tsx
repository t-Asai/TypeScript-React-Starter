import * as React from "react";
import "colors";
import * as jsdiff from "diff";
import { EmbedToLayout } from "~/hoc/Layout";

interface Props {
  baseText: string;
  nextText: string;
  updateBaseText: (text: string) => void;
  updateNextText: (text: string) => void;
}

interface DiffString {
  color: string;
  text: string;
}

const TextDiff = ({
  baseText,
  nextText,
  updateBaseText,
  updateNextText
}: Props) => {
  const diffText = jsdiff.diffChars(baseText, nextText);

  let diffStringArray: Array<DiffString> = [];

  diffText.forEach((part: any) => {
    const color = part.added ? "blue" : part.removed ? "red" : "grey";
    diffStringArray.push({ color: color, text: part.value });
  });

  const diffString = diffStringArray.map((item: DiffString) => (
    <p style={{ color: item.color, display: "inline" }}>{`${item.text}`}</p>
  ));

  return (
    <div>
      <div>{`${baseText}`}</div>
      <div>{`${nextText}`}</div>

      <textarea onChange={event => updateBaseText(event.target.value)} />
      <textarea onChange={event => updateNextText(event.target.value)} />
      <div>{diffString}</div>
    </div>
  );
};

export default EmbedToLayout(TextDiff);
