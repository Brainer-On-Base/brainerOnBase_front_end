import styled from "styled-components";

export const HBoxContainer = styled.div`
  display: flex;
  flex-direction: ${(props) => props.direction}; /* Dirección (row o column) */
  gap: ${(props) => props.gap}; /* Espaciado entre elementos */
  align-items: ${(props) => props.align}; /* Alineación en el eje cruzado */
  justify-content: ${(props) =>
    props.justify}; /* Justificación en el eje principal */
  flex-wrap: ${(props) => props.wrap}; /* Flex wrap */
  width: ${(props) => props.width}; /* Ancho del contenedor */
  height: ${(props) => props.height}; /* Altura del contenedor */
  padding: ${(props) => props.padding}; /* Padding */
  margin: ${(props) => props.margin}; /* Margin */
  border: ${(props) => props.border}; /* Border */
  border-radius: ${(props) => props.borderRadius}; /* Bordes redondeados */
  position: relative;
  background: ${({ theme, background }) =>
    theme?.[background] || background || "transparent"};
  transition: all 0.3s ease;
  overflow-x: ${(props) => props.overflowX ?? "auto"};
  overflow-y: ${(props) => props.overflowY ?? "auto"};
  transition: all 0.3s ease;

  /* Estilos de la barra de scroll */
  &::-webkit-scrollbar {
    width: 8px; /* Ancho de la barra vertical */
    height: 10px; /* Alto de la barra horizontal */
  }

  &::-webkit-scrollbar-track {
    background: ${({ theme }) =>
      theme?.shadePurpleLight || "#3c1b85"}; /* Color del track */
    border-radius: 10px;
  }

  &::-webkit-scrollbar-thumb {
    background: ${({ theme }) =>
      theme?.shadePurpleDark || "#8545c7"}; /* Color del "pulgar" */
    border-radius: 10px;
    border: 2px solid ${({ theme }) => theme?.shadePurpleDark || "#3c1b85"};
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme?.shadePurpleLight || "#b090ff"};
  }
`;
