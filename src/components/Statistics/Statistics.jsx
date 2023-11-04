import { StatisticsUl, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const stat = {};
  stats.forEach(el => {
    if (!stat[el.label]) {
      stat[el.label] = el.percentage;
    } else {
      stat[el.label] += el.percentage;
    }
  });

  const statMarkup = [];
  for (let key in stat) {
    statMarkup.push(<StatisticsItem name={key} value={stat[key]} />);
  }

  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <StatisticsUl display="flex">{statMarkup}</StatisticsUl>
    </section>
  );
};
