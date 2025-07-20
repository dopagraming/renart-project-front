import { useRef } from "react";
import ProductCard from "./ProductCard";
import "./ProductCarousel.css";

const ProductCarousel = ({ products }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = container.offsetWidth;

    if (direction === "left") {
      container.scrollLeft -= scrollAmount;
    } else {
      container.scrollLeft += scrollAmount;
    }
  };

  return (
    <div className="carousel-wrapper">
      <button className="nav-button left" onClick={() => scroll("left")}>
        &#10094;
      </button>

      <div className="carousel-container" ref={scrollRef}>
        {products.map((product, index) => (
          <div className="carousel-item" key={index}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>

      <button className="nav-button right" onClick={() => scroll("right")}>
        &#10095;
      </button>
    </div>
  );
};

export default ProductCarousel;
