export default function UserInfo({ name }) {
  return (
    <span style={{ 
      fontWeight: 'bold', 
      fontSize: '16px', 
      color: '#333',
      marginLeft: '12px' 
    }}>
      {name}
    </span>
  );
}