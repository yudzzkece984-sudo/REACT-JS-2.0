import Greeting from './components/Greeting';
import ProductCard from './components/ProductCard';
import Card from './components/Card';
import Comment from './components/Comment/Comment';

function App() {
  const userData = {
    name: "Beelz",
    avatarUrl: "https://i.pinimg.com/1200x/f0/74/32/f074324a5f0099b825c92cf368406a41.jpg"
  };

  return (
    <div style={{ padding: '40px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Evaluasi Harian Santri - Hari 3</h1>
      <hr />

      <section>
        <Greeting name="Beelz" />
      </section>

      <section>
        <ProductCard 
          productName="Kopi Arabika" 
          price={45000} 
          stock={12} 
          isAvailable={true} 
        />
      </section>

      <section style={{ marginTop: '20px' }}>
        <Card>
  <h4 className="font-bold text-blue-600 mb-2">Informasi Penting</h4>
     <img 
      src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?q=80&w=500" 
      className="w-full h-48 object-cover rounded-lg mb-3"
      alt="Produk"
      />
      <p className="text-gray-600">Konten ini dibungkus oleh Children Props.</p>
      <button className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Klik Detail
        </button>
        </Card>
      </section>

      <section>
        <h3>Komentar Terbaru</h3>
        <Comment user={userData} text="Kopi ini sangat enak!" />
      </section>
    </div>
  );
}

export default App;