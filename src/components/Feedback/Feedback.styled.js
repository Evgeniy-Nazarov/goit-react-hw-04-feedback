import styled from 'styled-components';

export const ContainerFeedback = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 400px;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    border: 1px solid #e0e0e0;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const FeedbackWrapper = styled.div`
    display: flex;
    margin: 0 auto;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
`;

export const FeedbackTitle = styled.h1`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
`;

export const FeedbackButtonStyle = styled.button`
    display: block;
    padding: 10px 20px;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    background-color: #000;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

    &:last-child {
        margin-right: 0;
    }

    &:hover,
    &:focus {
        background-color: #3f51b5;
    }
`;



