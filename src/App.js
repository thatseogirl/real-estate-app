import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/Global";
import Home from "./router/Home"
import EditListing from "./router/EditListing"
import CreateListing from "./router/CreateListing"
import About from "./router/About"
import Details from "./router/Details"

import MainLayout from "./layouts/MainLayout";

const theme = {
  colors: {
    primaryElementColor: "orange",
    secondaryElementColor: "#4a4b4c",
    firstTertiaryElementColor: "#e8e8e8",
    secondaryTertiaryElementColor: "#c3c3c3",
    primaryTextColor: "#000",
    secondaryTextColor: "#4a4b4c",
    hyperlinkTextColor: "#067bc2",
    primaryBackground: "#fff",
    secondaryBackground: "#f6f6f6",
  },

  mobile: {
    ipadAir: "990px",
    ipad: "768px",
    phone: "500px",
  },
};

export const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/createListing" element={<CreateListing />}></Route>
        <Route path="/editListing/:id" element={<EditListing />}></Route>
        <Route path="/details/:id" element={<Details />}></Route>
      </Route>
    )
  );
  return (
    
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
