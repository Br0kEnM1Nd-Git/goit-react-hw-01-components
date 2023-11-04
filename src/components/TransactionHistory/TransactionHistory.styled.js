import { Tr } from 'components/Helpers/Components.styled';
import styled from 'styled-components';

const TransactionRow = styled(Tr)`
  background-color: burlywood;
`;
export const Transaction = props => {
  return (
    <TransactionRow>
      <td>{props.type}</td>
      <td>{props.amount}</td>
      <td>{props.currency}</td>
    </TransactionRow>
  );
};
