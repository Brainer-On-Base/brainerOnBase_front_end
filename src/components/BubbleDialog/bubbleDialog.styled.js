import styled from "styled-components";

export const StyledBubbleDialog = styled("div")`
  p {
    margin: 0;
    font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;

    text-align: left;
    line-height: 1.5em;
    color: black !important;
  }
  position: absolute;
  right: ${({ position }) => position?.right};
  z-index: 999999;
  top: ${({ position }) => position?.top};
  left: ${({ position }) => position?.left};
  bottom: ${({ position }) => position?.bottom};
  justify-content: center;
  display: flex;
  align-items: center;
  margin: 20px;
  font-size: 20px;
  background-color: #fff;
  color: black !important;

  padding: 12px;
  box-shadow: 0 -4px #fff, 0 -8px #000, 4px 0 #fff, 4px -4px #000, 8px 0 #000,
    0 4px #fff, 0 8px #000, -4px 0 #fff, -4px 4px #000, -8px 0 #000,
    -4px -4px #000, 4px 4px #000;
  box-sizing: border-box;
  width: ${({ width }) => width ?? "200px"};
  min-height: ${({ height }) => height ?? "200px"};
  transition: all 1s ease;

  &:after {
    position: absolute;
    z-index: 999999;
    content: "";
    height: 4px;
    width: 4px;
    bottom: ${({ positionspik }) => positionspik?.bottom ?? "-8px"};
    left: ${({ positionspik }) => positionspik?.left ?? "90px"};
    background-color: #fff;
    box-shadow: 0 4px #000, 0 8px #000, 0 12px #000, 0 16px #000, -4px 12px #000,
      -8px 8px #000, -12px 4px #000, -4px 4px #fff, -8px 4px #fff, -4px 8px #fff,
      -4px 0 #fff, -8px 0 #fff, -12px 0 #fff;
    transform: ${({ positionspik }) =>
      positionspik?.rotate === "true"
        ? "rotate(150deg)"
        : ""}; /* Rotar el piquito */
  }

  span {
    font-size: 20px;
    font-family: "Luckiest Guy", cursive;
    color: #ff437d;
  }
`;
