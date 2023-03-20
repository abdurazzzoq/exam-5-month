import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home/Home";
import SIngleProduct from "./components/SingleProduct/SingleProduct";
import Layout from "./components/Layout/Layout";
import FavouriteContext, {
  FavouriteContextProvider,
} from "./components/context/FavouriteContext";
import Favourites from "./components/Favourites/Favourites";

function App() {
  return (
    <div className="py-4 mx-auto px-20">
      <FavouriteContextProvider>
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="products/:id" element={<SIngleProduct />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </FavouriteContextProvider>
    </div>
  );
}

export default App;
