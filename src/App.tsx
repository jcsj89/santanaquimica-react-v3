import { Route, Routes } from "react-router-dom";
import "./App.css";

import Page404 from "./pages/404/Page404";
import About from "./pages/about/About";
import Footer from "./pages/footer/Footer";
import Header from "./pages/header/Header";
import Home from "./pages/home/Home";
import { Dashboard } from "./pages/loggedIn/Dashboard";
import { DashboardProducts } from "./pages/loggedIn/products/DashboardProducts";
import { RegisterProduct } from "./pages/loggedIn/products/RegisterProduct";
import Products from "./pages/products/Products";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="sobre" element={<About />} />
        <Route path="produtos" element={<Products />} />
        <Route path="dashboard" element={<Dashboard />}>
          <Route index element={<DashboardProducts />} />
          <Route index path="produtos" element={<DashboardProducts />} />
          <Route path="produtos/registrar" element={<RegisterProduct />} />
          <Route path="*" element={<Page404 />} />
        </Route>
        <Route path="*" element={<Page404 />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
