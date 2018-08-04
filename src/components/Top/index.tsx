import * as React from "react";
import { EmbedToLayout } from "~/hoc/Layout";

interface Props {
  isLogin: boolean;
  signIn: () => void;
  signOut: () => void;
  checkAuth: () => void;
}

const Top = ({ isLogin, signIn, signOut, checkAuth }: Props) => (
  <div>
    これトップページ
    {isLogin === false ? (
      <button onClick={signIn}>signin</button>
    ) : (
      <button onClick={signOut}>signOut</button>
    )}
    <button onClick={checkAuth}>checkAuth</button>
  </div>
);

export default EmbedToLayout(Top);
