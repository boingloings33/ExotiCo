import AppBarComp from "./Components/General/AppBarComp";
import Home from "./Components/Homepage/Home";
import Gallery from "./Components/Navpages/Gallery";
import Games from "./Components/Navpages/Games";
import Resources from "./Components/Navpages/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/Navpages/PrivacyPolicy";
import EventRules from "./Components/Navpages/EventRules";
import Footer from "./Components/General/Footer";
import Fade from "react-reveal/Fade";
import useIsMobile from "./hooks/useIsMobile";

function App() {
  const isMobile = useIsMobile();
  return (
    <BrowserRouter>
      <AppBarComp />
      <Fade top distance={isMobile ? "1%" : "2%"}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
          <Route path="/games" element={<Games />}></Route>
          <Route path="/resources" element={<Resources />}></Route>
          <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
          <Route path="/event-rules" element={<EventRules />}></Route>
        </Routes>
      </Fade>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
