import AppBarComp from "./Components/AppBarComp";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Games from "./Components/Games";
import Resources from "./Components/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import EventRules from "./Components/EventRules";
import Footer from "./Components/Footer";

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
