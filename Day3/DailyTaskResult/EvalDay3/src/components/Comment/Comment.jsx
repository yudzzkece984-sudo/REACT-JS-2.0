import { Avatar } from './Avatar';
import UserInfo from './UserInfo';
import CommentText from './CommentText';

export default function Comment({ user, text }) {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      padding: '15px', 
      borderBottom: '1px solid #eee' 
    }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Avatar imgUrl={user.avatarUrl} />
        <UserInfo name={user.name} />
      </div>

      <div style={{ paddingLeft: '57px' }}>
        <CommentText text={text} />
      </div>
    </div>
  );
}