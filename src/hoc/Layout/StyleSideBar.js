import styled from "styled-components";

const side_width = "calc(4rem + 5vw)";
const main_width = `calc(100vw - ${side_width})`;

const margin = {
  main: 0.2,
  sidebar: 0.2
};

export const StyleSideBar = styled.div`
  position: relative;
  margin-left: ${margin.sidebar}rem;
  margin-top: ${margin.sidebar}rem;
  width: calc(${side_width} - ${margin.sidebar}rem - ${margin.sidebar}rem);
  height: calc(100vh - ${margin.sidebar}rem - ${margin.sidebar}rem);
  background: rgb(256, 256, 256);
  color: rgb(0, 0, 0);
  font-size: calc(0.8rem + 0.3vw);
`;

export const StyleComposedComponent = styled.div`
  position: relative;
  margin-left: ${margin.main}rem;
  margin-top: ${margin.main}rem;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-left: 1rem;
  padding-right: 1rem;
  width: calc(${main_width} - ${margin.main}rem - ${margin.main}rem);
  height: calc(100vh - ${margin.main}rem - ${margin.main}rem);
  background: rgb(256, 256, 256);
  color: rgb(0, 0, 0);
  font-size: calc(1rem + 0.5vw);
`;

export const StyleSideBarBuff = styled.div`
  position: relative;
  float: left;
  width: calc(${side_width});
  height: 100vh;
  background: rgb(0, 0, 128);
  color: rgb(256, 256, 256);
`;

export const StyleComposedComponentBuff = styled.div`
  position: relative;
  float: right;
  width: ${main_width};
  height: 100vh;
  background: rgb(0, 0, 256);
  color: rgb(256, 256, 256);
`;

export const StyleLinkList = styled.ul`
  position: relative;
  float: left;
  text-align: left;
  list-style: none;
  padding-left: 1rem;
`;
