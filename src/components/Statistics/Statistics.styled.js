import styled from 'styled-components';
import { Ul } from '../Helpers/Components.styled';

export const StatisticsUl = styled(Ul)`
  gap: 0;
`;

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const StatisticsLi = styled.li(props => {
  return {
    backgroundColor: getRandomColor(),
  };
});

export const StatisticsItem = props => (
  <StatisticsLi>
    <span className="label">{props.name}</span>
    <span className="percentage">{props.value + '%'}</span>
  </StatisticsLi>
);
