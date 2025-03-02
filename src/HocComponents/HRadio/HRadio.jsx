import {
  OptionContainer,
  RadioContainer,
  RadioInput,
  RadioLabel,
} from "./HRadio.styled";

const HRadio = ({
  options = [],
  additionalOptions = [],
  value = null, // Valor seleccionado (para radio)
  selectedValues = [], // Valores seleccionados (para checkbox)
  onChange,
  type = "radio", // "radio" o "checkbox"
  direction = "column",
  gap = "10px",
  label,
  labelColor = "",
  labelSize,
  name = "h-radio", // Nombre para el grupo de radio buttons
  labelDirection,
  ...props
}) => {
  // Procesamos las opciones para admitir tanto strings como objetos
  const allOptions = [
    ...additionalOptions.map((option) =>
      typeof option === "string" ? { value: option, label: option } : option
    ),
    ...options.map((option) =>
      typeof option === "string" ? { value: option, label: option } : option
    ),
  ];

  // Manejador de cambio para radio y checkbox
  const handleChange = (event) => {
    const { value: optionValue, checked } = event.target;

    if (type === "radio") {
      onChange(optionValue); // Actualizamos el valor único seleccionado
    } else if (type === "checkbox") {
      // Checkbox: Actualizamos el array de valores seleccionados
      const updatedValues = checked
        ? [...selectedValues, optionValue] // Agregamos el valor
        : selectedValues.filter((val) => val !== optionValue); // Eliminamos el valor
      onChange(updatedValues);
    }
  };

  return (
    <RadioContainer direction={direction} gap={gap} {...props}>
      {allOptions.map((option) => (
        <OptionContainer key={option.value} labelDirection={labelDirection}>
          <RadioInput
            type={type} // "radio" o "checkbox"
            name={type === "radio" ? name : undefined} // Grupo de radios
            value={option.value}
            checked={
              type === "radio"
                ? value === option.value // Comparación para radio
                : selectedValues.includes(option.value) // Comparación para checkbox
            }
            onChange={handleChange}
          />
          <RadioLabel labelColor={labelColor} labelSize={labelSize}>
            {option.label}
          </RadioLabel>
        </OptionContainer>
      ))}
    </RadioContainer>
  );
};

export default HRadio;
