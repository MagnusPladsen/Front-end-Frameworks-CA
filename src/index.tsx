import React from "react";
import ReactDOM from "react-dom/client";
import "./globals.css";
import HomePage from "./pages/home/HomePage";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout.component";
import ProductPage from "./pages/product/ProductPage";
import CartPage from "./pages/cart/CartPage";
import NotFoundPage from "./pages/notFound/NotFoundPage";
import CartProvider from "./context/cartContext/cart";
import ProductsContext from "./context/productsContext/products";
import ContactPage from "./pages/contact/ContactPage";
import CheckOut from "./pages/checkout/CheckOutPage";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <CartProvider>
      <ProductsContext>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<HomePage />} />
              <Route path="product/:id" element={<ProductPage />} />
              <Route path="cart" element={<CartPage />} />
              <Route path="cart/checkout" element={<CheckOut />} />
              <Route path="contact" element={<ContactPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ProductsContext>
    </CartProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
