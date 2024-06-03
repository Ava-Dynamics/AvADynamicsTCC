import { IconButton, InputAdornment, TextField } from "@mui/material";
import { useState } from "react";
import { MdVisibility, MdVisibilityOff } from "react-icons/md";

function Input({ label, type, ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword(!showPassword);
  const handleMouseDownPassword = (event) => event.preventDefault();

  return (
    <TextField
      label={label}
      fullWidth
      className="mb-4 border-finscorePurple"
      type={type === "password" && !showPassword ? "password" : "text"}
      InputLabelProps={{
        style: { color: "#6B46C1" },
      }}
      InputProps={{
        endAdornment:
          type === "password" ? (
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <MdVisibilityOff /> : <MdVisibility />}
              </IconButton>
            </InputAdornment>
          ) : null,
      }}
      sx={{
        "& label": {
          color: "#6B46C1",
        },
        "& fieldset": {
          borderColor: "#6B46C1",
        },
        "&:hover fieldset": {
          borderColor: "#6B46C1",
        },
        "&.Mui-focused fieldset": {
          borderColor: "#6B46C1",
        },
        "&.Mui-focused label": {
          color: "#6B46C1",
        },
        "& .MuiOutlinedInput-root": {
          "&.Mui-focused fieldset": {
            borderColor: "#6B46C1",
          },
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "#6B46C1",
        },
        "& .MuiTextField-root label": {
          color: "#6B46C1",
        },
      }}
      {...props}
    />
  );
}

export default Input;
