import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./routes/navbar/navbar.component";
import Home from "./routes/home/home.component";
import Shop from "./routes/shop/shop.component";
import AuthenticateUser from "./routes/authenticate-user/authenticate-user";
import Checkout from "./routes/checkout/checkout.component";
import UserProfile from "./routes/user-profile/user-profile.component";
import "./App.css";

function App() {
  const { user } = useSelector((state) => state.user);
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<AuthenticateUser />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="*" element={<Home />} />
        {user && <Route path="profile" element={<UserProfile />} />}
      </Route>
    </Routes>
  );
}

export default App;
