import { createGlobalStyle } from "styled-components";
import { setColor, setFont } from "./styles";
export const Globals = createGlobalStyle`

@import url('https://fonts.googleapis.com/css?family=Cantarell:400i|Montserrat:400,500&display=swap');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}


body {
  ${setFont.main};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2em;
  background-color: ${setColor.background};
  color: #4d4d4d;
  text-rendering: optimizeLegibility;
  /* &:hover {
    background-color: #4d4d4d;
    color: #d1d1d1;
  } */
}

h1 {
  font-size: 3em;
  line-height: 1.2;
  margin-bottom: 0.5em;
}

h2 {
  font-size: 2em;
  margin-bottom: 0.75em;
}

h3 {
  font-size: 1.5em;
  line-height: 1;
  margin-bottom: 1em;
}

h4{
  font-size: 1.2em;
  line-height: 1.2;
  margin-bottom: 01.25em;
  font-weight:bold;
}

h5 {
  font-size: 1em;
  margin-bottom: 1.5em;
  font-weight:bold;
}

h6 {
  font-size: 1em;
  font-weight:bold;
}

p {
  line-height: 1.5;
  margin: 0 0 1.5 0;
}

.clearfix {
  zoom: 1;
}
.clearfix:after {
  content: "_";
  clear: both;
  display: block;
  height: 0;
  visibility: hidden;
}



`;
// #d1d1d1
// #4d4d4d
