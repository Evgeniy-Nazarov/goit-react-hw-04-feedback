import { StatisticItem, StatisticWrapper } from "./Statistic.styled";

export const Statistics = ({ methodsStatistics: { countTotalFeedback, countPositiveFeedbackPercentage, IsShow }, state: { good, neutral, bad } }) => {
    

    return (
        <>
            <StatisticWrapper IsShow={IsShow()}> 
                <StatisticItem>Good: { good }</StatisticItem>
                <StatisticItem>Neutral: { neutral}</StatisticItem>
                <StatisticItem>Bad: {bad }</StatisticItem>
                <StatisticItem>Total: {countTotalFeedback()}</StatisticItem>
                <StatisticItem>Positive feedback: {countPositiveFeedbackPercentage()}%</StatisticItem>
            </StatisticWrapper>
            </>
        );
    }