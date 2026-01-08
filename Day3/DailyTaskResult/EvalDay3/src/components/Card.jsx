export default function Card({ children }) {
  const cardStyle = {
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: '#fff',
    marginBottom: '20px'
  };

  return <div style={cardStyle}>{children}</div>;
}