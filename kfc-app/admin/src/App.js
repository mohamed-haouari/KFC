import "./App.css";
import Header from "./components/Header";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Orders from "./pages/Orders";
import Customers from "./pages/Customers";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
        <Header/>
        <div class="container-fluid">
        <div class="row">
        <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/home" element={<Home />} />
            <Route path="/products" element={<Product />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/customers" element={<Customers />} />
        </Routes>
        </div>
      </div>
      </BrowserRouter>
    </>
  );
}

export default App;
