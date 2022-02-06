import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    body{
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
        font-family: "Roboto", Cambria, Cochin, Georgia, Times, "Times New Roman",
    serif;
    }

    .App{
        max-width: 1600px;
        padding: 10px; 
        margin: 0 auto;
    }
`