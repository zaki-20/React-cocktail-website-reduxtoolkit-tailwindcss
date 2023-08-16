import { Routes, Route } from "react-router-dom";

import Layout from './Components/Layout';
import HomePage from "./Pages/HomePage";
import ProductDetails from "./Pages/ProductDetails";
import PageNotFound from "./Components/PageNotFound";
import SearchBox from "./Components/SearchBox";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Layout>
              <SearchBox />
              <HomePage />
            </Layout>
          </>
        } />
        <Route path="/products/:id" element={<ProductDetails />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>

    </>
  );
}

export default App;
