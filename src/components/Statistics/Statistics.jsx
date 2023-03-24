import { StatisticItem, StatisticWrapper } from "./Statistic.styled";

export const Statistics = ({ methodsStatistics: { countTotalFeedback, countPositiveFeedbackPercentage, Notification }, state: { good, neutral, bad } }) => {
    

    return (
        <>
            <StatisticWrapper>{Notification()}
                <StatisticItem>Good: { good }</StatisticItem>
                <StatisticItem>Neutral: { neutral}</StatisticItem>
                <StatisticItem>Bad: {bad }</StatisticItem>
                <StatisticItem>Total: {countTotalFeedback()}</StatisticItem>
                <StatisticItem>Positive feedback: {countPositiveFeedbackPercentage()}%</StatisticItem>
            </StatisticWrapper>
            </>
        );
    }