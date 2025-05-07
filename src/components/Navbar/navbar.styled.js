import styled from "styled-components";

export const StyledNavbarContainer = styled("div")`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 0;
  z-index: 2 !important;
  margin: 0 auto;
  background: ${({ scrolled, theme }) =>
    scrolled ? theme.shadeViolet : "transparent"};
  background: ${({ theme }) => theme.shadeViolet};
  transition: background-color 0.3s ease;
  height: 80px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;

  img {
    width: 80px;
    margin: 2em 1em 2em 0;
    padding: 2px;
    will-change: filter;
    transition: filter 300ms;
    border-radius: 80%;
    /* border: 2px solid black; */
    /* background-color: #530354; */
    /* box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
      rgba(60, 64, 67, 0.15) 0px 1px 3px 1px; */

    &:hover {
      filter: drop-shadow(0 0 2em #c464ffaa);
    }
  }

  svg {
    font-size: 24px;
    cursor: pointer;
    margin: 10px;
    transition: all 0.2s ease;
    background-color: ${({ backgroundcolor }) =>
      backgroundcolor ? backgroundcolor : "transparent"};
    border-radius: 50%;
    &:hover {
      color: #1c93e3;
      // background: white;
    }
  }

  .navbaritems {
    font-size: 2em;
    line-height: 1.1;
    transition: all 300ms;
    font-family: "Luckiest Guy", cursive;
    color: #888;
    text-decoration: none;
    margin-right: 2px;

    &:hover {
      color: white;
      cursor: pointer;
    }
  }
`;
