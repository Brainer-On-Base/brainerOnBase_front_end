import styled from "styled-components";
import { HBox, HTitle } from "../../../HocComponents";

export const NavbarContainer = styled(HBox)`
  background: ${(props) => props.selected && "#783af463"} !important;
`;

export const NavbarItem = styled(HTitle)`
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => props?.selected && props.theme.goldColor} !important;

  &:hover {
    color: ${(props) => props.theme.goldColor} !important;
    background: ${(props) => props.theme.shadePurpleLight} !important;
  }
`;
export const NavbarSubItem = styled(HTitle)`
  cursor: pointer;
  transition: all 0.3s ease;
  color: ${(props) => props.selected && props.theme.goldColor} !important;
  font-weight: ${(props) => props.selected && "bold"} !important;

  &:hover {
    color: ${(props) => props.theme.goldColor} !important;
    font-weight: ${(props) => props.selected && "bold"} !important;
    /* background: ${(props) => props.theme.shadePurpleLight} !important; */
  }
`;
