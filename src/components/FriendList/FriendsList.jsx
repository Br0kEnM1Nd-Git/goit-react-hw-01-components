import { FriendListItem } from './FriendListItem';
import { FriendListUl } from './FriendsList.styled';

export const FriendList = props => {
  const friendListMarkup = [];
  props.friends.forEach(({ avatar, name, isOnline, id }) => {
    friendListMarkup.push(
      <FriendListItem
        avatar={avatar}
        name={name}
        isonline={isOnline}
        key={id}
      />
    );
  });

  return <FriendListUl>{friendListMarkup}</FriendListUl>;
};
