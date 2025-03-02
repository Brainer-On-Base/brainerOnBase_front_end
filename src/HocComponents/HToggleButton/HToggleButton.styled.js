import styled from "styled-components";

export const ToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  margin-top: -10px;
  margin-bottom: 20px;
  z-index: 100;
`;

export const ToggleOption = styled.div`
  font-size: var(--p16);
  font-weight: ${({ select }) =>
    select ? "var(--weight-bold)" : "var(--weight-book)"};
  color: ${({ theme, useHocStyle }) =>
    useHocStyle && theme.purpleMedium} !important;
`;

export const Toggle = styled.div`
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background-color: ${({ theme }) => theme.white};
  box-shadow: ${({ useHocStyle }) =>
    useHocStyle
      ? `rgba(112, 37, 190, 0.11) 0px -6px 26px inset,
    rgba(112, 37, 190, 0.27) 4px 4px 26px inset`
      : "none"};
  border: 2px solid
    ${({ theme, off, on, useHocStyle }) =>
      useHocStyle
        ? theme.purpleMedium
        : off
        ? "red"
        : on
        ? "green"
        : theme.purpleMedium};
  position: relative;
`;

export const ToggleButton = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  top: 50%;
  transform: translateY(-50%);
  background-color: ${({ theme, off, on, useHocStyle }) =>
    useHocStyle
      ? theme.purpleMedium
      : off
      ? "red"
      : on
      ? "green"
      : theme.purpleMedium};
  position: absolute;
  left: ${({ child }) => (child ? "3px" : null)};
  right: ${({ child }) => (child ? null : "3px")};
`;

export const ToggleLabel = styled.label`
  font-size: ${({ labelSize }) =>
    labelSize || "var(--p16)"}; /* Tamaño de fuente del label */
  color: ${({ labelColor, theme }) =>
    theme?.[labelColor] ||
    labelColor ||
    theme.purpleMedium}; /* Color del label */
  font-weight: ${({ labelWeight }) => labelWeight || "var(--weight-regular)"};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-bottom: 10px;
`;
