import { Routes, Route } from "react-router-dom";

import Layout from './Components/Layout';
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Components/PageNotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/products/:pid" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
