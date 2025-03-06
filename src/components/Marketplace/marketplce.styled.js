import styled from "styled-components";
import { HBox, HTitle } from "../../HocComponents";

export const NavbarItem = styled(HBox)`
  background: ${(props) =>
    props.selected ? props.theme.shadePurpleMedium : "transparent"};
  &:hover {
    background: ${(props) =>
      props.selected
        ? props.theme.shadePurpleMedium
        : props.theme.shadePurpleLight} !important;
  }
`;

export const CategoryItem = styled(HTitle)`
  cursor: pointer;
  transition: all 0.3s ease;

  color: ${(props) =>
    props.selected ? props.theme.goldColor : "inherit"} !important;
`;

export const SubCategoryItem = styled(HTitle)`
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.goldColor} !important;
  }

  color: ${(props) =>
    props.selected ? props.theme.goldColor : "inherit"} !important;
`;
