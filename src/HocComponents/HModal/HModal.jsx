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
import HTitle from "../HTitle/HTitle";

const HModal = ({
  title = "Titolo",
  text = "",
  children,
  onConfirmFunction,
  cancelText = "Cancel",
  confirmText = "Accept",
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
    }
  };

  const handleCancel = () => {
    onCloseFunction();
  };

  return (
    <ModalContainer onClick={handleOverlayClick}>
      <ModalBody
        className={`animate__animated animate__slideInUp animate__faster`}
      >
        <ModalHeader>
          <HTitle padding={"10px"}>{title}</HTitle>
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
            fontSize={"20px"}
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
              fontSize={"20px"}
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
