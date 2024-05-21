import { TextField } from "@mui/material"

function Input({ label }) {
  return (
    <TextField
      label={label}
      fullWidth
      className=" mb-4 border-finscorePurple"
      InputLabelProps={{
        style: { color: "#6B46C1" },
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
    />
  )
}

export default Input
