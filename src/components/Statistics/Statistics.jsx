import { StatisticsUl, StatisticsItem } from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  const stat = {};
  stats.forEach(el => {
    if (!stat[el.label]) {
      stat[el.label] = {
        percentage: el.percentage,
        id: el.id,
      };
    } else {
      stat[el.label].percentage += el.percentage;
    }
  });

  const statMarkup = [];
  for (let key in stat) {
    statMarkup.push(
      <StatisticsItem
        name={key}
        value={stat[key].percentage}
        key={stat[key].id}
      />
    );
  }

  return (
    <section className="statistics">
      {title && <h2 className="title">Upload stats</h2>}
      <StatisticsUl display="flex">{statMarkup}</StatisticsUl>
    </section>
  );
};
