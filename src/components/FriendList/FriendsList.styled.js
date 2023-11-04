import { Span, Ul } from 'components/Helpers/Components.styled';
import styled from 'styled-components';

export const FriendListUl = styled(Ul)(props => {
  return {
    display: 'flex',
  };
});

export const IsOnlineSpan = styled(Span)(props => {
  return {
    display: 'block',
    width: '100px',
    height: '100%',
    backgroundColor: props.isonline === true ? 'green' : 'red',
  };
});
