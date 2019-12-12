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

// //global
// import { createGlobalStyle } from "styled-components";
// import { setColor, setFont } from "../../styles";
// const Globals = createGlobalStyle`
// @import url('https://fonts.googleapis.com/css?family=Courgette|Lato:400,700');

// *{
//  margin:0;
//  padding:0;
//  box-sizing:border-box;
// }
// body{
//  font-size:100%;
//  color:${setColor.mainBlack};
//  background:${setColor.mainWhite};
//  ${setFont.main};

// }
// h1{
//  font-size:3em;line-height:1.2;margin-bottom:0.5em
// }
// h2{
//  font-size:2em;margin-bottom:0.75em
// }
// h3{
//  font-size:1.5em;line-height:1;margin-bottom:1em
// }
// h4{
//  font-size:1.2em;line-height:1.2;margin-bottom:1.25em;font-weight:bold;
// }
// h5{
//  font-size:1em;margin-bottom:1.5em;font-weight:bold;
// }
// h6{
//  font-size:1em;font-weight:bold;
// }
// p{
//  line-height:1.5;margin:0 0 1.5 0;
// }
// `;

// export default Globals;

// //styles.js
// export const setColor = {
//   primaryColor: "#af9a7d",
//   mainWhite: "#fff",
//   mainBlack: "#222",
//   mainGrey: "#ececec",
//   lightGrey: "#f7f7f7"
// };

// export const setFont = {
//   main: "font-family: 'Lato', sans-serif;",
//   slanted: "font-family: 'Courgette', cursive;"
// };

// export const setFlex = ({ x = "center", y = "center" } = {}) => {
//   return `display:flex;align-items:${y};justify-content:${x}`;
// };

// export const setBackground = ({
//   img = "https://www.nappy.co/wp-content/uploads/2017/06/tamarcus-brown-131431.jpg",
//   color = "rgba(0,0,0,0)"
// } = {}) => {
//   return `background: linear-gradient(${color}, ${color}),
//     url(${img}) center/cover fixed no-repeat`;
// };

// //hero component
// import styled from "styled-components";
// import { setFlex, setBackground } from "../../styles";
// const Hero = styled.header`
//   min-height: 100vh;
//   ${props => setBackground({ img: props.img, color: "rgba(0,0,0,0)" })};
//   ${setFlex()};
// `;

// export default Hero;
