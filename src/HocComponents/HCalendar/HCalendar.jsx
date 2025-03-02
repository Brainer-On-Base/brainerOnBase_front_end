import React from "react";
import { HCalendarWrapper } from "./HCalendar.styled";

const HCalendar = ({
  value,
  onChange,
  label,
  name,
  min,
  max,
  disabled,
  labelSize,
  width,
}) => {
  return (
    <HCalendarWrapper
      labelWeight="bold"
      labelPosition="flex-start"
      labelWidth="100%"
      labelSize={labelSize ?? "var(--p16)"}
      label={label ?? "Date"}
      type="date"
      name={name ?? "date"}
      onChange={onChange}
      value={value}
      width={width ?? "100%"}
      min={min ?? null}
      max={max ?? null}
      disabled={disabled}
    />
  );
};

export default HCalendar;
