import styled from "styled-components";

const side_width = "calc(4rem + 5vw)";
const main_width = `calc(100vw - ${side_width})`;
const header_height = 5;

const margin = {
  vertical: 0.2,
  horizon: 0.2
};

export const StyleSideBar = styled.div`
  position: relative;
  margin-left: ${margin.horizon}vw;
  margin-top: ${margin.horizon}vh;
  width: calc(${side_width} - ${margin.horizon}vw - ${margin.horizon}vw);
  height: calc(
    100vh - ${header_height}vh - ${margin.horizon}vh - ${margin.horizon}vh
  );
  background: rgb(256, 256, 256);
  color: rgb(0, 0, 0);
  font-size: calc(1rem + 0.5vw);
`;

export const StyleComposedComponent = styled.div`
  position: relative;
  margin-left: ${margin.vertical}vw;
  margin-top: ${margin.vertical}vh;
  width: calc(${main_width} - ${margin.vertical}vw - ${margin.vertical}vw);
  height: calc(
    100vh - ${header_height}vh - ${margin.vertical}vh - ${margin.vertical}vh
  );
  overflow: scroll;
  background: rgb(256, 256, 256);
  color: rgb(0, 0, 0);
  font-size: calc(1rem + 0.5vw);
`;

export const StyleHeader = styled.div`
  position: relative;
  margin-left: ${margin.vertical}vw;
  margin-top: ${margin.vertical}vh;
  width: calc(100% - ${margin.horizon}vw - ${margin.horizon}vw);
  height: calc(
    ${header_height}vh - ${margin.vertical}vh - ${margin.vertical}vh
  );
  background: rgb(256, 256, 256);
  color: rgb(0, 0, 0);
  font-size: calc(1rem + 0.5vw);
`;

export const StyleHeaderBuff = styled.div`
  position: relative;
  float: left;
  width: 100vw;
  height: calc(${header_height}vh);
  background: rgb(0, 0, 64);
  color: rgb(256, 256, 256);
`;

export const StyleSideBarBuff = styled.div`
  position: relative;
  float: left;
  width: calc(${side_width});
  height: calc(100vh - ${header_height}vh);
  background: rgb(0, 0, 128);
  color: rgb(256, 256, 256);
`;

export const StyleComposedComponentBuff = styled.div`
  position: relative;
  float: right;
  width: ${main_width};
  height: calc(100vh - ${header_height}vh);
  background: rgb(0, 0, 256);
  color: rgb(256, 256, 256);
`;
