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
import { useEffect, useState } from "react";

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
    phone: "500px"
  },
};

export const App = () => {
  const breakPoint = useMediaQuery("(max-width: 768px)");
  const [house, setHouse] = useState([]);
  const fetchTask = async () => {
    const respond = await fetch("https://my-json-server.typicode.com/thatseogirl/Task-tracker/tasks");
    const data = await respond.json();
    return data;
  };
  useEffect(() => {
    const getTask = async () => {
      const taskFromServer = await fetchTask();
      setHouse(taskFromServer);
    };

    getTask();
  }, [])
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
