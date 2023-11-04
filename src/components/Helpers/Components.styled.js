import styled from 'styled-components';

export const Ul = styled.ul(props => {
  const style = {
    listStyleType: 'none',
  };
  if (props.display === 'flex') {
    style.display = 'flex';
    style.gap = '20px';
    style['& li'] = {
      display: 'flex',
      flexDirection: 'column',
    };
  }
  return style;
});

export const Li = styled.li(props => {
  return {};
});

export const Span = styled.span(props => {
  return {};
});

export const Tr = styled.tr(props => {
  return {};
});
