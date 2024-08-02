import React, { Component } from 'react';
import FeedbackButton from 'components/feedback-button/feedback-button';
import { nanoid } from 'nanoid';
import FeedbackItemRender from 'components/feedback-item-render/feedback-item-render';
import FuncItemRender from 'components/total-count/func-item-render';
import Section from './section/section';
import Notification from './notification/notification';

export class App extends Component {
  static propTypes = { good: Number, neutral: Number, bad: Number };

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  btnHandle = e => {
    if (e.target.innerHTML === 'good') {
      this.setState({
        good: this.state.good + 1,
      });
    } else if (e.target.innerHTML === 'neutral') {
      this.setState({
        neutral: this.state.neutral + 1,
      });
    } else {
      this.setState({
        bad: this.state.bad + 1,
      });
    }
  };

  countTotalFeedback = () =>
    this.state.bad + this.state.neutral + this.state.good;

  countPositiveFeedbackPercentage = () =>
    ((this.state.good / this.countTotalFeedback()) * 100).toFixed(2);

  render() {
    return (
      <>
        <Section
          title="Please leave feedback"
          render={Object.keys(this.state).map(feedback => (
            <FeedbackButton
              name={feedback}
              key={nanoid()}
              func={this.btnHandle}
            />
          ))}
        />

        {JSON.stringify(this.state) ===
        JSON.stringify({ good: 0, neutral: 0, bad: 0 }) ? (
          <Section
            title="Statistics"
            reactComp={<Notification messege="There is no feedback" />}
          />
        ) : (
          <Section
            title="Statistics"
            render={Object.entries(this.state).map(value => (
              <FeedbackItemRender
                objkey={value[0]}
                value={value[1]}
                key={nanoid()}
              />
            ))}
            reactComp={
              <div>
                <FuncItemRender
                  title="total"
                  func={this.countTotalFeedback()}
                  key={nanoid()}
                />
                <FuncItemRender
                  title="Positive feedback"
                  func={this.countPositiveFeedbackPercentage()}
                  percent="%"
                  key={nanoid()}
                />
              </div>
            }
          />
        )}
      </>
    );
  }
}
