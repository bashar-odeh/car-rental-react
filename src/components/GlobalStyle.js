import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root{
  
}

*,*:after,*:before{
    padding:0;
    margin:0;
    box-sizing:border-box;
    
}
html{
    overflow-x:hidden;
    scroll-behavior:smooth;
}
body{
    font-family: 'Montserrat', sans-serif;  overflow-x: auto;  max-width: 1440px;
    margin:0 auto;
}

h2{
    padding:1rem 0;
    font-size:2rem;  

}
p{
    padding:1rem 0;
    line-height:150%;
    font-size:1rem;
}
button{
    font-size:1rem;
}

`;
export default GlobalStyle;
