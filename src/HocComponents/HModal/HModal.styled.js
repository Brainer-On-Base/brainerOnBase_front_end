import styled from "styled-components";

// Contenedor principal del modal
export const ModalContainer = styled("div")`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0 0 0 / 69%); /* Fondo oscuro */

  z-index: 997; /* Asegúrate de que esté detrás del modal */
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContent = styled("div")`
  font-size: 16px;
  color: #555;
  margin-bottom: 16px;

  p {
    text-align: center;
    margin-bottom: 10px;
    font-size: ${({ theme }) => theme.textSize ?? "var(--p16)"};
    color: ${({ theme }) => theme.textColor ?? "#333"};
    font-weight: ${({ theme }) => theme.textWeight ?? "var(--weight-book)"};
  }
`;

// Header del modal
export const ModalHeader = styled("div")`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding: 15px;
  background: ${({ theme }) => theme.shadePurpleDark};
  text-transform: uppercase;
  h3 {
    font-size: 20px;
    color: ${({ theme }) => theme.purpleLight2};
  }
`;

// Botón de cerrar (a la derecha del header)
export const CloseButton = styled("button")`
  background: none;
  border: none;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;

  svg {
    color: ${({ theme }) => theme.purpleLight2};
  }
`;

// Cuerpo del modal (contenido central)
export const ModalBody = styled("div")`
  border-radius: 20px;
  width: 500px;
  background: ${({ theme }) => theme.shadePurpleLight};
  display: flex;
  flex-direction: column;
  padding: 0 0 16px 0;
  align-items: center;
  justify-content: center;
  gap: 15px;
  z-index: 9999;
  border: 1px solid ${({ theme }) => theme.purpleDark};
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

// Footer con botones de acción
export const ModalFooter = styled("div")`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
`;

// Botón de cancelar
export const CancelButton = styled("button")`
  background-color: #f5f5f5;
  color: #333;
  border: 1px solid #ddd;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #e0e0e0;
  }
`;

// Botón de confirmar
export const ConfirmButton = styled("button")`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;

  &:hover {
    background-color: #0056b3;
  }
`;

export const ModalInput = styled("input")`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  margin-top: 8px;
  font-size: 14px;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;
