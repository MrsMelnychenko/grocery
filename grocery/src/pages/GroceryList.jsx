import { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { Paper } from "@mui/material";

import GroceryListOption from "../components/GroceryListOption";
import { autofillProductsEN } from "../utils/autofill";
import "./GroceryList.css";

export default function GroceryList() {
  const [listOptions, setListOptions] = useState([
    "Apples",
    "Avocado",
    "Bananas",
    "Beef",
    "Bread",
    "Butter",
    "Cabbage",
    "Cake/Candy",
    "Carrots",
    "Cereals",
    "Cheese",
    "Chicken",
    "Coffee",
    "Cream",
    "Cucumbers",
    "Eggs",
    "Fizzy drinks",
    "Flour",
    "Garlic",
    "Ham",
    "Lemons",
    "Milk",
    "Mushrooms",
    "Onions",
    "Pasta",
    "Peppers",
    "Pork",
    "Potatoes",
    "Rice",
    "Salt/Sugar",
    "Sauce",
    "Snacks",
    "Spices",
    "Spinach",
    "Greens",
    "Tea",
    "Tomatoes",
    "Water",
    "Yogurt",
    "Zuccini",
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isBtnSave, setIsBtnSave] = useState(false);

  useEffect(() => {
    const storedOptions = localStorage.getItem("groceryOptions");
    if (storedOptions === null) {
      localStorage.setItem("groceryOptions", listOptions);
    } else {
      setListOptions(storedOptions.split(","));
    }
  }, []);

  const onClickHandler = (event) => {
    if (event.target.textContent === "CUSTOMIZE") {
      setIsBtnSave(true);
    }
    if (event.target.textContent === "SAVE") {
      setIsBtnSave(false);
    }
  };

  const onAddProductHandler = (inputValue) => {
    console.log(inputValue);
    const updatedOptions = [...listOptions, inputValue];
    updatedOptions.sort();
    localStorage.setItem("groceryOptions", updatedOptions);
    setListOptions(updatedOptions);
    setInputValue("");
  };

  return (
    <>
      <h1 class="list-title">Grocery List</h1>
      <div className="middle">
        <div className="corn"></div>
        <div className="milk"></div>
      </div>
      {/* <div className="corn"></div> */}
      <div className="frame">
        <div className="grocery-container">
          <div className="grocery-options-container">
            {listOptions.map((listOption) => (
              <GroceryListOption
                key={listOption}
                optionName={listOption}
                isBtnSave={isBtnSave}
                listOptions={listOptions}
                setListOptions={setListOptions}
              />
            ))}
          </div>
          {isBtnSave && (
            <Autocomplete
              id="free-solo-demo"
              freeSolo
              style={{ width: "200px" }}
              options={autofillProductsEN.map((option) => option.title)}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Type the product"
                  onChange={(event) => {
                    setInputValue(event.target.value);
                  }}
                />
              )}
              value={inputValue}
              onChange={(newValue) => {
                setInputValue(newValue);
              }}
              PaperComponent={({ children }) => (
                <Paper style={{ maxHeight: "100px" }}>{children}</Paper>
              )}
            />
          )}
        </div>
        <div className="btn-container">
          {isBtnSave && (
            <button
              className="btn-list"
              onClick={() => onAddProductHandler(inputValue)}
            >
              Add product
            </button>
          )}
          <button className="btn-list" onClick={onClickHandler}>
            {isBtnSave ? "SAVE" : "CUSTOMIZE"}
          </button>
        </div>
      </div>
      <div className="top">
        <div className="bubbles"></div>
        <div className="line4"></div>
      </div>
      <div className="middle-pic">
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
      <div className="below-pic">
        <div className="pepper"></div>
        <div className="line"></div>
        <div className="orange"></div>
      </div>
    </>
  );
}
