import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import { useRef } from "react";
import { useMediaQuery, useTheme, Divider } from "@mui/material";
import Section1Web from "./Components/Section1Web";
import Section1Mobile from "./Components/Section1Mobile";
import AppBarComp from "./Components/AppBarComp";
import Section2Web from "./Components/Section2Web";
import Section3Web from "./Components/Section3Web";

function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const resultRef = useRef(null);
  return (
    <>
      <AppBarComp />
      <Header resultRef={resultRef} />
      {!isMobile ? <Section1Web resultRef={resultRef} /> : <Section1Mobile />}
      {!isMobile && <Section2Web />}
      {!isMobile && <Section3Web />}
      <Form ref={resultRef} />
      {!isMobile && (
        <>
          <Divider sx={{ mt: 16 }} /> <Footer />
        </>
      )}
    </>
  );
}

export default App;
