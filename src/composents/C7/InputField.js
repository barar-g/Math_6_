import React from "react";
import { TextField } from "@mui/material";

function InputField({ value, placeholder, onChange }) {
  return (
    <TextField
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      style={{ width: "170px", marginLeft: "20px", direction: 'rtl' }}
      fullWidth
    />
  );
}

export default InputField;