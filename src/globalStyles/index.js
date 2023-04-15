import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');

*{
     margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scrollbar-width: auto;
    scrollbar-color: #ffffff #ba2c2c;
}

*::-webkit-scrollbar {
    width: 10px;
}

*::-webkit-scrollbar-track {
    background: #ffffff00;
}

*::-webkit-scrollbar-thumb {
    background-color: #ffffff;
    border-radius: 20px;
    border: 30px solid #00000000;
}

h2 {
    color: white;
}
`;

export default GlobalStyle;
