import React from "react";
import NavBar from "../Layouts/NavBar/NavBar";
import Home from "./Home/Home";
import Product from "./Product/Product";

export default function SchoolPage() {
  return (
    <div className="font-sans">
      <NavBar />
      <Home />
      <Product />
    </div>
  );
}
