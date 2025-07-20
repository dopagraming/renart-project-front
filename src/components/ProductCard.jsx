import { useState } from "react";
import "./ProductCard.css";
import { FaStar, FaRegStar, FaStarHalfAlt } from "react-icons/fa";

const ProductCard = ({ product }) => {
  const [color, setColor] = useState("yellow");

  const colorMap = {
    yellow: { name: "Yellow Gold", hex: "#E6CA97" },
    white: { name: "White Gold", hex: "#D9D9D9" },
    rose: { name: "Rose Gold", hex: "#E1A4A9" },
  };

  const fullStars = Math.floor(product.rating);
  const hasHalfStar = product.rating % 1 >= 0.25;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="product-card">
      <img src={product.images[color]} alt={product.name} />

      <h3 className="product-card-name">{product.name}</h3>

      <p className="product-card-price">${product.price} USD</p>

      <div className="color-buttons">
        {Object.keys(colorMap).map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            className="color-button"
            style={{
              backgroundColor: colorMap[c].hex,
              border: color === c ? "2px solid black" : "1px solid #ccc",
            }}
          />
        ))}
      </div>

      <p className="color-name">{colorMap[color].name}</p>
      <div className="rating-container">
        <div className="star-row">
          {[...Array(fullStars)].map((_, i) => (
            <FaStar key={`f-${i}`} color="#E6CA97" size={14} />
          ))}
          {hasHalfStar && <FaStarHalfAlt color="#E6CA97" size={14} />}
          {[...Array(emptyStars)].map((_, i) => (
            <FaRegStar key={`e-${i}`} color="#E6CA97" size={14} />
          ))}
        </div>

        <p className="rating-number">{product?.rating}/5</p>
      </div>
    </div>
  );
};

export default ProductCard;
