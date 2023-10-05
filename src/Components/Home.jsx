import Footer from "./Footer";
import Form from "./Form";
import Header from "./Header";
import { useRef } from "react";
import { useMediaQuery, useTheme, Divider, Box } from "@mui/material";
import Section1Web from "./Section1Web";
import Section1Mobile from "./Section1Mobile";
import Section2Web from "./Section2Web";
import Section3Web from "./Section3Web";
import Section1Ref from "./Section1Ref";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef(null);
  const s1Ref = useRef(null);
  return (
    <>
      <Header s1Ref={s1Ref} />
      <Section1Ref ref={s1Ref} />
      <Box sx={{ mx: { sm: 8, md: 18, xl: 34 } }}>
        {!isMobile ? <Section1Web formRef={formRef} /> : <Section1Mobile />}
        {!isMobile && <Section2Web />}
        {!isMobile && <Section3Web />}
        <Form ref={formRef} />
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
