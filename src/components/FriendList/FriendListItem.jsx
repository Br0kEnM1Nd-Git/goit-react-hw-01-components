import { IsOnlineSpan } from './FriendsList.styled';

export const FriendListItem = props => (
  <li className="item">
    <IsOnlineSpan isonline={props.isonline} />
    <img className="avatar" src={props.avatar} alt="User avatar" width="48" />
    <p className="name">{props.name}</p>
  </li>
);
