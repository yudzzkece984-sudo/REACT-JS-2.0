const Card = ({ children }) => {
  const style = {
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
    padding: '20px',
    borderRadius: '12px',
    backgroundColor: 'white',
    maxWidth: '300px'
  };

  return <div style={style}>{children}</div>;
};

export default Card;