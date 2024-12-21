import Swal from "sweetalert2";
import "./sweetAlertClasses.css";
import { useCallback, useState } from "react";

export default function useModals() {
  const [copied, setCopied] = useState(false);
  const useTextModal = async ({
    text,
    title,
    textButton,
    confirmButtonColor,
    textColor,
    onConfirmFunction,
  }) => {
    Swal.fire({
      html: text,
      title: title,
      confirmButtonText: textButton ?? "Accept",
      color: textColor ?? "black",
      confirmButtonColor: confirmButtonColor ?? "#ff437d",
      showCancelButton: true,
      background: "rgb(255,255,255)",
      inputAutoFocus: false,
      focusConfirm: true,
      customClass: {
        popup: "modalContainer",
      },
      showClass: {
        popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
      },
      hideClass: {
        popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
      },
    }).then(async (result) => {
      if (result.isConfirmed) {
        onConfirmFunction();
      }
    });
  };
  const useInputModal = async ({
    title,
    input,
    inputLabel,
    inputPlaceholder,
    inputValidator,
    confirmButtonColor,
    textColor,
    onConfirmFunction,
  }) => {
    const result = await Swal.fire({
      title: title,
      input: input,
      inputLabel: inputLabel,
      inputPlaceholder: inputPlaceholder,
      showCancelButton: true,
      inputValidator: inputValidator,
      confirmButtonText: "Submit",
      color: textColor ?? "black",
      confirmButtonColor: confirmButtonColor ?? "#43a1a2",
      background: "rgb(255,255,255)",
      customClass: {
        popup: "modalContainer",
        input: "customInputClass",
      },
      showClass: {
        popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
      },
      hideClass: {
        popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
      },
    });

    if (result.isConfirmed) {
      onConfirmFunction(result.value);
    }
  };
  const copyToClipboard = useCallback((text) => {
    navigator.clipboard.writeText(text).then(
      () => {
        setCopied(true);
        Swal.fire({
          toast: true,
          position: "bottom",
          icon: "success",
          title: "Contract copied!",
          showConfirmButton: false,
          timer: 5000,
          timerProgressBar: true,
          showClass: {
            popup: `
                  animate__animated
                  animate__fadeInUp
                  animate__faster
                `,
          },
          hideClass: {
            popup: `
                  animate__animated
                  animate__fadeOutDown
                  animate__faster
                `,
          },
        });
        setTimeout(() => setCopied(false), 2000); // Reset after 2 seconds
      },
      (err) => {
        console.error("Could not copy text: ", err);
      }
    );
  }, []);

  const showPopUp = ({ text, icon }) => {
    return Swal.fire({
      toast: true,
      position: "bottom",
      icon: icon,
      title: text,
      showConfirmButton: false,
      timer: 5000,
      timerProgressBar: true,
      showClass: {
        popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `,
      },
      hideClass: {
        popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `,
      },
    });
  };

  return {
    useTextModal,
    useInputModal,
    copied,
    copyToClipboard,
    showPopUp,
  };
}
