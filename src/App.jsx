import Greeting from './components/Greeting';
import ProductCard from './components/ProductCard';
import Card from './components/Card';
import Comment from './components/comment/Comment';

function App() {
  return (
    <div style={{ padding: '20px' }}>

      <Greeting name="Beelz" />

      <ProductCard 
        productName="Laptop Gaming Pro" 
        price={15000000} 
        stock={5} 
        isAvailable={true} 
      />

  <Card>
  <img 
    src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500" 
    alt="Laptop Gaming" 
    style={{ width: '100%', borderRadius: '8px', marginBottom: '10px' }} 
  />
  <h3 style={{ margin: '10px 0' }}>Laptop Gaming Pro</h3>
  
  <div style={{ fontSize: '13px', backgroundColor: '#f4f4f4', padding: '10px', borderRadius: '5px', marginBottom: '10px' }}>
    <p style={{ margin: '5px 0' }}><strong>Spek Singkat:</strong></p>
    <ul style={{ paddingLeft: '20px', margin: 0 }}>
      <li>Prosesor: Intel Core i7 Gen-13</li>
      <li>Grafis: NVIDIA RTX 4060 8GB</li>
      <li>RAM: 16GB DDR5</li>
      <li>Layar: 15.6" FHD 144Hz</li>
    </ul>
  </div>

  <button style={{ 
    width: '100%', 
    padding: '10px', 
    backgroundColor: '#007bff', 
    color: 'white', 
    border: 'none', 
    borderRadius: '5px',
    cursor: 'pointer'
  }}>
    Klik Detail
  </button>
  </Card>

      <Comment 
        userAvatar="https://i.pinimg.com/736x/65/5b/41/655b41e1de0599103a997be88a9c6011.jpg"
        username="Beelz"
        text="Wah, Laptopnya keren bro! Speknya mantap banget untuk gaming."
      />
    </div>
  );
}

export default App;