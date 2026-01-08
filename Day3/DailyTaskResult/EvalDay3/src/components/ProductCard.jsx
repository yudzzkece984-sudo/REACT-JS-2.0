const ProductCard = ({ productName, price, stock, isAvailable }) => {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', width: '250px' }}>
      <h3>{productName}</h3>
      <p>Harga: <strong>Rp {price.toLocaleString()}</strong></p>
      <p>Stok: {stock} unit</p>
      <div style={{ color: isAvailable ? 'green' : 'red', fontWeight: 'bold' }}>
        {isAvailable ? '● Tersedia' : '○ Stok Habis'}
      </div>
    </div>
  );
};

ProductCard.defaultProps = {
  price: 0,
  stock: 0,
  isAvailable: false
};

export default ProductCard;