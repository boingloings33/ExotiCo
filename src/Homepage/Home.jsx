import Form from "./Form";
import Header from "./Header";
import { useRef } from "react";
import { useMediaQuery, useTheme, Box } from "@mui/material";
import Section1Mobile from "./Section1Mobile";
import Section2Mobile from "./Section2Mobile";
import Section1Web from "./Section1Web";
import Section2Web from "./Section2Web";
import Section3Web from "./Section3Web";
import Section1Ref from "./Section1Ref";
import Section3Mobile from "./Section3Mobile";

function Home() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const formRef = useRef(null);
  const s1Ref = useRef(null);
  return (
    <>
      <Header s1Ref={s1Ref} />
      <Section1Ref ref={s1Ref} />
      <Box sx={{ mx: { sm: 8, md: 16, lg: 16, xl: 28 } }}>
        <Box>
          {!isMobile ? <Section1Web formRef={formRef} /> : <Section1Mobile />}
          {!isMobile ? <Section2Web /> : <Section2Mobile />}
          {!isMobile ? <Section3Web /> : <Section3Mobile />}
          <Form ref={formRef} />
        </Box>
      </Box>
    </>
  );
}

export default Home;
