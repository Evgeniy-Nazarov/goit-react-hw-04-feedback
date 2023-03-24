import React, { Component } from 'react'
import { FeedbackButton } from "./Feedback/Feedback";
import { ContainerFeedback, FeedbackTitle } from './Feedback/Feedback.styled';
import { Statistics } from "./Statistics/Statistics";



export class App extends Component {

  state = {
        good: 0,
        neutral: 0,
        bad: 0
  };

  methodsButton = {
    onGood: () => {
      this.setState(prevState => ({
        good: prevState.good + 1
      }));
    }, 
    onNeutral: () => {
      this.setState(prevState => ({
        neutral: prevState.neutral + 1
      }));
    },
    onBad: () => {
      this.setState(prevState => ({
        bad: prevState.bad + 1
      }));
    }
  };

  methodsStatistics = {
    countTotalFeedback: () => {
      const { good, neutral, bad } = this.state;
      return good + neutral + bad;
    },
    countPositiveFeedbackPercentage: () => {
      const { good, neutral, bad } = this.state;
      const total = '0'
      return good + neutral + bad > 0 ? Math.round((good / (good + neutral + bad)) * 100) : total;
      
      
    },
    isVisibleStatistics: () => {
      const { good, neutral, bad } = this.state;
      const title = 'No feedback given';
    return good + neutral + bad > 0 ? ' ' : title;
    }
    
  };

  




  render () {
  return (
    <ContainerFeedback>
      <FeedbackTitle>Please leave Feedback</FeedbackTitle>
      <FeedbackButton methodsButton={this.methodsButton } />
                <h2>Statistics</h2>
      <Statistics methodsStatistics={this.methodsStatistics} state={ this.state} />
    </ContainerFeedback>
  );
    }
};
