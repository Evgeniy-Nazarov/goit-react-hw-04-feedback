import { StatisticItem, StatisticWrapper } from "./Statistic.styled";

export const Statistics = ({ methodsStatistics: { countTotalFeedback, countPositiveFeedbackPercentage, isVisibleStatistics }, state: { good, neutral, bad } }) => {
    

    return (
        <>
            <StatisticWrapper>{isVisibleStatistics()}
                <StatisticItem>Good: { good }</StatisticItem>
                <StatisticItem>Neutral: { neutral}</StatisticItem>
                <StatisticItem>Bad: {bad }</StatisticItem>
                <StatisticItem>Total: {countTotalFeedback()}</StatisticItem>
                <StatisticItem>Positive feedback: {countPositiveFeedbackPercentage()}%</StatisticItem>
            </StatisticWrapper>
            </>
        );
    }