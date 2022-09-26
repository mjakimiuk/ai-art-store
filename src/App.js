import { Routes, Route } from "react-router-dom";

import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import "./App.css";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
