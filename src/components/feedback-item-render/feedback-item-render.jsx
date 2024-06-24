import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback-item-render.module.css';

const FeedbackItemRender = ({ objkey, value }) => {
  return <li className={css.feedbackItem}>{`${objkey}: ${value}`}</li>;
};

FeedbackItemRender.propTypes = {
  objkey: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default FeedbackItemRender;
