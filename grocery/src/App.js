import { createBrowserRouter, RouterProvider } from "react-router-dom";
import GroceryList from "./pages/GroceryList.jsx";
import Welcome from "./pages/Welcome.jsx";
import "./App.css";
// import { I18nextProvider } from "react-i18next";
// import i18n from "./i18n.js";

const App = () => {
  const myRouter = createBrowserRouter([
    { path: "/", element: <Welcome /> },
    { path: "/shopping", element: <GroceryList /> },
  ]);

  return (
    <>
      {/* <I18nextProvider i18n={i18n}> */}
      {/* <Welcome /> */}
      <RouterProvider router={myRouter} />
      {/* </I18nextProvider> */}
    </>
  );
};

export default App;
