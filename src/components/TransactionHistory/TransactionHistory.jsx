import { Transaction } from './TransactionHistory.styled';

export const TransactionHistory = props => {
  const markup = props.item.map(({ amount, type, currency, id }) => {
    return (
      <Transaction amount={amount} type={type} currency={currency} key={id} />
    );
  });
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{markup}</tbody>
    </table>
  );
};
