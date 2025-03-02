import React from "react";
import HModal from "./HModal";
import { useAPI } from "../../../hooks/useAPI";

const HModalSecurityCode = ({
  title,
  text,
  cancelText,
  confirmText,
  showModal,
  onCloseFunction,
  onConfirmFunction,
}) => {
  const { api } = useAPI("dashboard");

  const checkDisabled = (input) => {
    return api?.securityCode?.toUpperCase() !== input.toUpperCase();
  };
  return (
    <HModal
      cancelText={cancelText}
      confirmText={confirmText}
      title={title ?? "Codice di sicurezza"}
      text={text ?? "Inserisci il codice di sicurezza"}
      placeholderInput=""
      showModal={showModal}
      onCloseFunction={onCloseFunction}
      onConfirmFunction={onConfirmFunction}
      isInput={true}
      inputType="password"
      checkDisabled={checkDisabled}
    />
  );
};

export default HModalSecurityCode;
