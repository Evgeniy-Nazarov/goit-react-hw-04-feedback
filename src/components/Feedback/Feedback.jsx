import PropTypes from 'prop-types';
import { FeedbackButtonStyle, FeedbackWrapper } from "./Feedback.styled";

export const FeedbackButton = ({ methodsButton: { onGood, onNeutral, onBad} }) => {
    return (
        <FeedbackWrapper>
            <FeedbackButtonStyle onClick={onGood}>Good</FeedbackButtonStyle>
            <FeedbackButtonStyle onClick={onNeutral}>Neutral</FeedbackButtonStyle>
            <FeedbackButtonStyle onClick={onBad}>Bad</FeedbackButtonStyle>
        </FeedbackWrapper>
    );
}

FeedbackButton.propTypes = {
    methodsButton: PropTypes.shape({
        onGood: PropTypes.func.isRequired,
        onNeutral: PropTypes.func.isRequired,
        onBad: PropTypes.func.isRequired,
    })
}

