import AppBarComp from "./Components/AppBarComp";
import Home from "./Components/Home";
import Gallery from "./Components/Gallery";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <BrowserRouter>
        <AppBarComp />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/gallery" element={<Gallery />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
