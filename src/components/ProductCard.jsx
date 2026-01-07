const ProductCard = ({ productName, price, stock, isAvailable }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '15px',
    margin: '10px 0',
    backgroundColor: isAvailable ? '#fff' : '#f9f9f9'
  };

  return (
    <div style={cardStyle}>
      <h3>{productName}</h3>
      <p>Harga: <b>Rp{price.toLocaleString()}</b></p>
      <p>Stok: {stock} unit</p>
      <p style={{ color: isAvailable ? 'green' : 'red' }}>
        {isAvailable ? "Tersedia" : "Stok Habis"}
      </p>
    </div>
  );
};

ProductCard.defaultProps = {
  productName: "Produk Tanpa Nama",
  price: 0,
  stock: 0,
  isAvailable: false
};

export default ProductCard;