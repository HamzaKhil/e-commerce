import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Header from "./Header";
import withProductData from "./withProductData";
import ErrorBoundary from "./ErrorBoundary";
import Men from "./Men";
import Women from "./Women";
import Electronics from "./Electronics";
import Login from "./login";
import "./index.css";

const MenWithProductData = withProductData(Men, "men's clothing");
const WomenWithProductData = withProductData(Women, "women's clothing");
const ElectronicsWithProductData = withProductData(Electronics, "electronics");

export default function App() {
  return (
    <Router>
      <div>
        <Header />
        <div className="flex gap-2 bg-slate-200 font-semibold">
          <Link to="/men" className="p-2">
            Men's clothing
          </Link>
          <Link to="/women" className="p-2">
            Women's clothing
          </Link>
          <Link to="/electronics" className="p-2">
            Electronics
          </Link>
        </div>
        <ErrorBoundary>
          <Routes>
            <Route path="/men" element={<MenWithProductData />} />
            <Route path="/women" element={<WomenWithProductData />} />
            <Route
              path="/electronics"
              element={<ElectronicsWithProductData />}
            />
            <Route path="/login" element={<Login />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </Router>
  );
}
