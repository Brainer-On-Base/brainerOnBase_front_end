import React, { useEffect, useState } from "react";
import {
  ModalContent,
  ModalContainer,
  ModalHeader,
  ModalBody,
  ModalFooter,
  CloseButton,
} from "./HModal.styled";
import HInput from "../HInput/HInput";
import HButton from "../HButton/HButton";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { useSounds } from "../../../hooks/useSounds";

const HModal = ({
  title = "Titolo",
  text = "",
  children,
  onConfirmFunction,
  cancelText = "Cancella",
  confirmText = "Accetta",
  onCloseFunction,
  showModal = false,
  isInput = false,
  inputType = "text",
  placeholderInput = "",
  checkDisabled,
  buttonDisabled = false,
  showButtonCancel = true,
  ...props
}) => {
  const [inputValue, setInputValue] = useState("");
  const { playCancelar } = useSounds();

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  if (!showModal) return null;

  const handleConfirm = () => {
    // Si hay un input, pasa su valor; de lo contrario, llama a la función sin parámetros
    if (isInput) {
      onConfirmFunction(inputValue);
    } else {
      onConfirmFunction();
    }
  };

  // Detectar clic fuera del modal para cerrarlo
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onCloseFunction();
      playCancelar();
    }
  };

  const handleCancel = () => {
    onCloseFunction();
    playCancelar();
  };

  return (
    <ModalContainer onClick={handleOverlayClick}>
      <ModalBody
        className={`animate__animated animate__slideInUp animate__faster`}
      >
        <ModalHeader>
          <h3>{title}</h3>
          <CloseButton onClick={handleCancel}>
            <IoMdCloseCircleOutline size={40} />
          </CloseButton>
        </ModalHeader>
        <ModalContent>
          {children || (
            <>
              <p>{text}</p>
              {isInput && (
                <HInput
                  width={"280px"}
                  height={"50px"}
                  type={inputType}
                  value={inputValue}
                  onChange={handleInputChange}
                  placeholder={placeholderInput}
                />
              )}
            </>
          )}
        </ModalContent>
        <ModalFooter>
          <HButton
            onClick={handleConfirm}
            fontSize={"var(--h5)"}
            padding={"15px 20px"}
            disabled={
              buttonDisabled
                ? buttonDisabled
                : checkDisabled && checkDisabled(inputValue)
            }
          >
            {confirmText}
          </HButton>
          {showButtonCancel && (
            <HButton
              onClick={handleCancel}
              fontSize={"var(--h5)"}
              padding={"15px 20px"}
            >
              {cancelText}
            </HButton>
          )}
        </ModalFooter>
      </ModalBody>
    </ModalContainer>
  );
};

export default HModal;
