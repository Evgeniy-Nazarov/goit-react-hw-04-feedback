import React, { useState } from 'react';
import { ContainerFeedback, FeedbackTitle } from './Feedback/Feedback.styled';
import { StatisticsTitle } from './Statistics/Statistic.styled';
import { Statistics } from './Statistics/Statistics';
import { FeedbackButton } from './Feedback/Feedback';

export const App = () => {
  const [good, setgood] = useState(0);
  const [neutral, setneutral] = useState(0);
  const [bad, setbad] = useState(0);

  const onGood = () => {
    setgood(prevGood => prevGood + 1);
  };

  const onNeutral = () => {
    setneutral(prevNeutral => prevNeutral + 1);
  };

  const onBad = () => {
    setbad(prevBad => prevBad + 1);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = '0';
    return good + neutral + bad > 0
      ? Math.round((good / (good + neutral + bad)) * 100)
      : total;
  };

  const IsShow = () => {
    return good + neutral + bad > 0 ? true : false;
  };

  const Notification = () => {
    const title = <span>There is no feedback</span>;
    return good + neutral + bad > 0 ? ' ' : title;
  };

  return (
    <ContainerFeedback>
      <FeedbackTitle>Please leave Feedback</FeedbackTitle>
      <FeedbackButton onGood={onGood} onNeutral={onNeutral} onBad={onBad} />
      <StatisticsTitle>Statistics {Notification()}</StatisticsTitle>
      <Statistics
        countTotalFeedback={countTotalFeedback}
        countPositiveFeedbackPercentage={countPositiveFeedbackPercentage}
        IsShow={IsShow}
        good={good}
        neutral={neutral}
        bad={bad}
      />
    </ContainerFeedback>
  );
};
