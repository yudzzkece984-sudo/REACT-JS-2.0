const Avatar = ({ url }) => (
  <img 
    src={url} 
    alt="Avatar" 
    style={{ width: 50, height: 50, borderRadius: '50%', objectFit: 'cover' }} 
  />
);

const UserInfo = ({ username }) => (
  <h4 style={{ margin: '0 0 5px 0', color: '#333' }}>{username}</h4>
);

const CommentText = ({ text }) => (
  <p style={{ margin: 0, color: '#666', fontSize: '14px' }}>{text}</p>
);

const Comment = ({ userAvatar, username, text }) => {
  return (
    <div style={{ 
      display: 'flex', 
      gap: '15px', 
      padding: '15px', 
      borderBottom: '1px solid #eee',
      alignItems: 'center' 
    }}>
      <Avatar url={userAvatar} />
      <div>
        <UserInfo username={username} />
        <CommentText text={text} />
      </div>
    </div>
  );
};

export default Comment;