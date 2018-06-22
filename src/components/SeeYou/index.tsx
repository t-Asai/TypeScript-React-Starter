import * as React from "react";
import { ConnectSideBar } from "~/hoc/SideBar";
import { H1 } from "./StyleSeeYou";

const SeeYou = () => (
  <div>
    <H1>seeyou</H1>
    seeyou
  </div>
);

export default ConnectSideBar(SeeYou);
