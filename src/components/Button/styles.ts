import styled from "styled-components";

export const StyledButton = styled.button<{color?: string, backgroundColor?: string}>`
    padding: 5px 30px;
    font-size: 16px;
    cursor: pointer;
    border-radius: 4px;
    border: none;
    font-family: "Roboto", Cambria, Cochin, Georgia, Times, "Times New Roman",
      serif;
    &:hover{
        background-image: linear-gradient(rgba(0, 0, 0, 0.3) 0 0);
    }
    color: ${({color}) => (color? color : '#e2d8cb')};
    background-color: ${({backgroundColor}) => (backgroundColor? backgroundColor : '#3b70e1')};
`