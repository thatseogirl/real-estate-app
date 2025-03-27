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
import {Theme } from "./theme/Theme"

import MainLayout from "./layouts/MainLayout";

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
    
    <ThemeProvider theme={Theme}>
      <GlobalStyles />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};

export default App;
