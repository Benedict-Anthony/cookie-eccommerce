import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { CartProvider } from "./context/CartContext";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import CheckOut from "./pages/CheckOut";


function App() {
  return (
    <>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Shop />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/checkout" element={<CheckOut />} />
        </Routes>
      </CartProvider>
    </>
  );
}

export default App;
