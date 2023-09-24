import Footer from "./Components/Footer";
import Form from "./Components/Form";
import Header from "./Components/Header";
import MenuIcon from "@mui/icons-material/Menu";
import { useRef } from "react";
import {
  useMediaQuery,
  useTheme,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
} from "@mui/material";
import Section1Web from "./Components/Section1Web";
import Section1Mobile from "./Components/Section1Mobile";
function App() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const resultRef = useRef(null);
  return (
    <>
      <AppBar position="fixed">
        <Toolbar
          sx={{
            backgroundColor: "info.main",
            justifyContent: "space-between",
          }}
        >
          <IconButton>
            <MenuIcon sx={{ color: "primary.light" }} />
          </IconButton>
          <Typography
            fontFamily="'Fredoka', sans-serif;"
            fontWeight={700}
            fontSize={24}
            sx={{ color: "primary.light" }}
          >
            ExotiCo
          </Typography>
          <img
            src="images/allie-icon.jpg"
            alt=""
            style={{
              width: 36,
              borderRadius: 70,
            }}
          />
        </Toolbar>
      </AppBar>
      <Header resultRef={resultRef} />
      {!isMobile ? <Section1Web /> : <Section1Mobile />}
      <Form ref={resultRef} />
      {!isMobile && <Footer />}
    </>
  );
}

export default App;
