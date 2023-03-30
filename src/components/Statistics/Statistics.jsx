import PropTypes from 'prop-types';
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
    
Statistics.propTypes = {
    methodsStatistics: PropTypes.shape({
        countTotalFeedback: PropTypes.func.isRequired,
        countPositiveFeedbackPercentage: PropTypes.func.isRequired,
        IsShow: PropTypes.func.isRequired,
    }),
    state: PropTypes.shape({
        good: PropTypes.number.isRequired,
        neutral: PropTypes.number.isRequired,
        bad: PropTypes.number.isRequired,
    })
}