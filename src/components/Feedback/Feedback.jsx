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

