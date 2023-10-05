import AppBarComp from "./Components/AppBarComp";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import Games from "./Components/Games";
import Resources from "./Components/Resources";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <AppBarComp />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/gallery" element={<Gallery />}></Route>
        <Route path="/games" element={<Games />}></Route>
        <Route path="/resources" element={<Resources />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
