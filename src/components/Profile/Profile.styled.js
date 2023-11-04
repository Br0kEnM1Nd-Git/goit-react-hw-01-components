import styled from 'styled-components';

export const ProfileContainer = styled.div(props => {
  return {
    backgroundColor: '#e3dac9',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '20px',
    '& > div': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
    },
  };
});
