import * as React from "react";
import { EmbedToLayout } from "~/hoc/Layout";
import { H1 } from "./Style404";

const NotFound = () => (
  <div>
    <H1>Sorry, can’t find that.</H1>
  </div>
);

export default EmbedToLayout(NotFound);
