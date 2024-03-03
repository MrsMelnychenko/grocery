import * as React from "react";
import { useTheme } from "@mui/material/styles";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { styled } from "@mui/material/styles";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { Typography } from "@mui/material";
import "./GroceryListOption.css";

const MaterialUISwitch = styled((props) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 22,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#5b9444" : "#65C466",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "black",
      border: "6px solid #fff",
    },
    "&.Mui-disabled .MuiSwitch-thumb": {
      color: "black",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      // opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 18,
    height: 18,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#545454",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

export default function GroceryListOption({
  optionName,
  isBtnSave,
  listOptions,
  setListOptions,
}) {
  const removeListOption = (optionName) => {
    const updatedOptions = listOptions.filter(
      (listItem) => listItem !== optionName
    );
    localStorage.setItem("groceryOptions", updatedOptions);
    setListOptions(updatedOptions);
  };
  return (
    <FormGroup>
      <FormControlLabel
        style={{
          margin: "2px 4px 2px 0",
          fontWeight: "700px",
          fontFamily: "Open Sans",
        }}
        control={
          isBtnSave ? (
            <HighlightOffIcon onClick={() => removeListOption(optionName)} />
          ) : (
            <MaterialUISwitch />
          )
        }
        label={
          <Typography
            variant="body1"
            style={{
              fontWeight: "500",
              fontFamily: "Open Sans",
              marginLeft: "3px",
            }}
          >
            {optionName}
          </Typography>
        }
      />
    </FormGroup>
  );
}
