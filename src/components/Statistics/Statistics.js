import React from 'react';
import PropTypes from 'prop-types';
import styles from './statistics.module.css';

export default function Statistics({ good, neutral, bad, total, positivePercentage }) {
  return (
    <>
      <p className={styles.statisticsName}>Good:{good}</p>
      <p className={styles.statisticsName}>Neutral:{neutral}</p>
      <p className={styles.statisticsName}>Bad:{bad}</p>
      <p className={styles.statisticsName}>Total:{total}</p>
      <p className={styles.statisticsName}>Positive feedback:{positivePercentage} %</p>
    </>
  );
};

Statistics.porpTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};
