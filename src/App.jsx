import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { useRef } from "react";
import { useMediaQuery, useTheme } from "@mui/material";
import Section1Web from "./Components/Section1Web";
import Section1Mobile from "./Components/Section1Mobile";
import AppBarComp from "./Components/AppBarComp";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const resultRef = useRef(null);
  return (
    <>
      <AppBarComp />
      <Header resultRef={resultRef} />
      {!isMobile ? <Section1Web /> : <Section1Mobile />}
      <Form ref={resultRef} />
      {!isMobile && <Footer />}
    </>
  );
}

export default App;
