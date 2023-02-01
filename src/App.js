import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Whatwedo from "./pages/whatwedo";

import Aboutus from "./pages/aboutus";
import Joinus from "./pages/joinus";
import Contactus from "./pages/contactus";
import Donate from "./pages/donate";
import Navvbar from "./components/navbar/Navvbar";

function App() {
  return (
    <BrowserRouter>
      <Navvbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/whatwedo" element={<Whatwedo />} />
        <Route path="/joinus" element={<Joinus />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/donate" element={<Donate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
