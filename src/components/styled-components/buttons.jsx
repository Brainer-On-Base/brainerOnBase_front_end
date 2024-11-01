import { styled } from "@mui/system";


export const StyledButton = styled('button')`
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
    margin: ${({margin}) => margin ? margin : '0'};
    &:hover {
        border-color: #ff437d;
    }
    &:focus,
    &:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
    }


`