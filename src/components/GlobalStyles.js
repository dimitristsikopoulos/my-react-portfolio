import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
    margin:0;
    padding:0;
    box-sizing: border-box;
body{
    font-size: 62.5%;
    font-family: 'Montserrat', sans-serif;
}
h1{
    font-size:4rem;
}
h2{
    font-size:2rem;
}
h3{
    font-size:1.5rem
}
p,li{
    font-size:1rem
    }
a{
    text-decoration:none;
    
}
`;
export default GlobalStyle;
