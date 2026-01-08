export default function CommentText({ text }) {
  return (
    <p style={{ 
      marginTop: '8px', 
      color: '#555', 
      lineHeight: '1.5',
      fontSize: '14px' 
    }}>
      {text}
    </p>
  );
}