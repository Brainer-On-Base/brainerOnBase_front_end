import styled from "styled-components";
import { HBox, HTitle } from "../../HocComponents";

export const NavbarItem = styled(HBox)`
  font-family: "Luckiest Guy", cursive;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    h1 {
      color: ${(props) => props.theme.goldColor} !important;
    }
    background: ${(props) => props.theme.shadePurpleLight} !important;
  }
`;
