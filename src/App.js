import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import useMediaQuery from "./components/hooks/useMediaQuery";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./assets/styles/Global";
import {
  Home,
  EditListing,
  CreateListing,
  About,
  Details,
  Navigation,
} from "./components";
import MobileNav from "./components/MobileNav";

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

  mobile: "768px",
};

export const App = () => {
  const breakPoint = useMediaQuery("(max-width: 768px)");
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <>
          <GlobalStyles />
          {breakPoint ? <MobileNav /> : <Navigation />}
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/about' element={<About />}></Route>
            <Route path='/createListing' element={<CreateListing />}></Route>
            <Route path='/editListing' element={<EditListing />}></Route>
            <Route path='/details' element={<Details />}></Route>
          </Routes>
        </>
      </ThemeProvider>
    </Router>
  );
};

export default App;
