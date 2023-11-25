import React, { useEffect } from "react";

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./app/pages/Home/Home";

import NotFound from "./app/pages/not-found/NotFound";
import { useDispatch, useSelector } from "react-redux";
import { selectProducts } from "./features/products/productSlice";

function App() {
  const items = useSelector(selectProducts);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
