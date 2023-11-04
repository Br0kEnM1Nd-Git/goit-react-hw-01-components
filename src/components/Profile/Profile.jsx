import { Ul } from '../Helpers/Components.styled';
import { ProfileContainer } from './Profile.styled';

export const Profile = ({
  avatar,
  username,
  tag,
  location,
  stats: { views, followers, likes },
}) => (
  <ProfileContainer>
    <div className="description">
      <img src={avatar} alt="User avatar" className="avatar" />
      <p className="name">{username}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>
    </div>

    <Ul display="flex">
      <li>
        <span className="label">Followers</span>
        <span className="quantity">{followers}</span>
      </li>
      <li>
        <span className="label">Views</span>
        <span className="quantity">{views}</span>
      </li>
      <li>
        <span className="label">Likes</span>
        <span className="quantity">{likes}</span>
      </li>
    </Ul>
  </ProfileContainer>
);
