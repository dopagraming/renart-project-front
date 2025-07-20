import { useEffect, useState } from "react";
import axios from "axios";
import ProductCarousel from "./components/ProductCarousel";
import "./App.css";
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [minPopularity, setMinPopularity] = useState("");
  const [maxPopularity, setMaxPopularity] = useState("");

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const params = {};

      if (minPrice) params.minPrice = minPrice;
      if (maxPrice) params.maxPrice = maxPrice;
      if (minPopularity) params.minPopularity = minPopularity;
      if (maxPopularity) params.maxPopularity = maxPopularity;

      const res = await axios.get(
        "https://renart-project-back.vercel.app/api/products",
        {
          params,
        }
      );
      setProducts(res.data);
    } catch (err) {
      console.error("Error fetching products:", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  if (loading) {
    return (
      <div className="loader-container">
        <div className="loader"></div>
      </div>
    );
  }

  return (
    <div style={{ padding: 20 }}>
      <h1 className="hero-title">Product List</h1>

      <div className="filtering-container">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Min Popularity (0-1)"
          value={minPopularity}
          onChange={(e) => setMinPopularity(e.target.value)}
        />
        <input
          type="number"
          step="0.01"
          placeholder="Max Popularity (0-1)"
          value={maxPopularity}
          onChange={(e) => setMaxPopularity(e.target.value)}
        />
        <button className="fetch-products-btn" onClick={fetchProducts}>
          Search
        </button>
      </div>

      <ProductCarousel products={products} />
    </div>
  );
}

export default App;
