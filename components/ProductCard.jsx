const ProductCard = ({ product }) => {
  const [color, setColor] = useState("yellow");

  const colorMap = {
    yellow: { name: "Yellow Gold", hex: "#E6CA97" },
    white: { name: "White Gold", hex: "#D9D9D9" },
    rose: { name: "Rose Gold", hex: "#E1A4A9" },
  };

  return (
    <div
      style={{
        border: "1px solid #eee",
        borderRadius: 12,
        padding: 16,
        width: 250,
      }}
    >
      <img src={product.images[color]} alt="Product" width="100%" />

      <h3 style={{ fontFamily: "Avenir", fontSize: 18 }}>{product.name}</h3>

      <p style={{ fontFamily: "Montserrat", fontWeight: 500, fontSize: 15 }}>
        ${product.price} USD
      </p>

      <p style={{ fontFamily: "Avenir", fontSize: 14 }}>
        {colorMap[color].name}
      </p>

      <div style={{ display: "flex", gap: 8, margin: "8px 0" }}>
        {Object.keys(colorMap).map((c) => (
          <button
            key={c}
            onClick={() => setColor(c)}
            style={{
              backgroundColor: colorMap[c].hex,
              border: color === c ? "2px solid black" : "1px solid #ccc",
              borderRadius: "50%",
              width: 24,
              height: 24,
              cursor: "pointer",
            }}
          />
        ))}
      </div>

      <p style={{ fontFamily: "Avenir", fontSize: 12 }}>
        ⭐ {product.popularityOutOfFive} / 5
      </p>
    </div>
  );
};
