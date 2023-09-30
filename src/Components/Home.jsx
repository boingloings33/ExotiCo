import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import { useRef } from "react";
import { useMediaQuery, useTheme, Divider, Box } from "@mui/material";
import Section1Web from "./Section1Web";
import Section1Mobile from "./Section1Mobile";
import Section2Web from "./Section2Web";
import Section3Web from "./Section3Web";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const resultRef = useRef(null);
  return (
    <>
      <Header resultRef={resultRef} />
      <Box sx={{ mx: { sm: 8, md: 18, xl: 34 } }}>
        {!isMobile ? <Section1Web resultRef={resultRef} /> : <Section1Mobile />}
        {!isMobile && <Section2Web />}
        {!isMobile && <Section3Web />}
        <Form ref={resultRef} />
        {!isMobile && (
          <>
            <Divider sx={{ mt: 16 }} /> <Footer />
          </>
        )}
      </Box>
    </>
  );
}

export default Home;
