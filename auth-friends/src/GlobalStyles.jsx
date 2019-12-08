import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-size: 62.5%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

html {
 
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 2rem;
  background-color: #e1e1e1;
  color: #4d4d4d;
  text-rendering: optimizeLegibility;
  &:hover {
    background-color: #4d4d4d;
    color: #d1d1d1;
  }
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

:root {
  /* a global variable which can be accessed by var(--primary) */
  --primaryColor: #4d4d4d;
}

`;
