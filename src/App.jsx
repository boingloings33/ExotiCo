import AppBarComp from "./Components/AppBarComp";
import Home from "./Homepage/Home";
import Gallery from "./Navpages/Gallery";
import Games from "./Navpages/Games";
import Resources from "./Navpages/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Navpages/PrivacyPolicy";
import EventRules from "./Navpages/EventRules";
import Footer from "./Navpages/Footer";

function App() {
  return (
    <BrowserRouter>
      <AppBarComp />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
        <Route path="/privacy-policy" element={<PrivacyPolicy />}></Route>
        <Route path="/event-rules" element={<EventRules />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
