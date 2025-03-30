import React from "react";
import { toast, ToastContainer, Slide } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Función para mostrar el toast
export const HPopUp = ({ type = "success", message, customOptions = {} }) => {
  const options = {
    ...customOptions,
  };
  // Renderiza el toast según el tipo
  switch (type) {
    case "success":
      toast.success(message, options);
      break;
    case "error":
      toast.error(message, options);
      break;
    case "warning":
      toast.warn(message, options);
      break;
    case "info":
      toast.info(message, options);
      break;
    default:
      toast(message, options);
      break;
  }
};

// El componente HPopUp que configura el contenedor de los Toasts
export const HPopUpContainer = ({
  position = "bottom-center",
  autoClose = 2000,
  hideProgressBar = true,
  closeOnClick = true,
  pauseOnHover = true,
  draggable = false,
  theme = "light",
  toastStyle = {
    fontSize: "16px",
    fontWeight: "bold",
    color: "#7025BE",
  },
}) => {
  return (
    <>
      {/* Contenedor global de Toast */}
      <ToastContainer
        position={position}
        autoClose={autoClose}
        hideProgressBar={hideProgressBar}
        newestOnTop={false}
        closeOnClick={closeOnClick}
        rtl={false}
        pauseOnFocusLoss
        draggable={draggable}
        pauseOnHover={pauseOnHover}
        theme={theme}
        toastStyle={toastStyle}
        transition={Slide} // Agregar transición
        style={{
          zIndex: 999999,
        }}
      />
    </>
  );
};
