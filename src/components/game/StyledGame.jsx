import { styled } from "@mui/system";


export const StyledBlackContainer = styled('div')`
    width: 90%;
    height: 80vh;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: ${({padding}) => padding ? padding : '0.6em 1.2em'};
    font-size: ${(props) => props.size ? props.size : '1.5em'};
    font-weight: 500;
    font-family: inherit;
    background-color: #1a1a1a;
    cursor: pointer;
    transition: border-color 0.25s;
    font-family: "Luckiest Guy", cursive;
    color: white !important;
    z-index: 2;
`

