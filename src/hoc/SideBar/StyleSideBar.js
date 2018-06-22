import styled from "styled-components";

const side = {
  rem: 7,
  vw: 5
};

const mainComponentMargin = 0.1;

export const StyleSideBar = styled.div`
  position: relative;
  float: left;
  width: calc(${side.rem}rem + ${side.vw}vw);
  height: 100vh;
  background: rgb(150, 150, 200);
  color: rgb(256, 256, 256);
`;

export const StyleComposedComponent = styled.div`
  position: relative;
  margin-left: ${mainComponentMargin}rem;
  margin-right: ${mainComponentMargin}rem;
  margin-top: ${mainComponentMargin}rem;
  height: calc(100vh - ${mainComponentMargin}rem - ${mainComponentMargin}rem);
  background: rgb(200, 200, 256);
  color: rgb(256, 256, 256);
`;

export const StyleComposedComponentBuff = styled.div`
  position: relative;
  float: right;
  width: calc(100vw - ${side.vw}vw - ${side.rem}rem);
  height: 100vh;
  background: rgb(0, 0, 256);
  color: rgb(256, 256, 256);
`;

export const StyleLinkList = styled.ul`
  position: relative;
  float: left;
  text-align: left;
  font-size: calc(1rem + 0.5vw);
`;
