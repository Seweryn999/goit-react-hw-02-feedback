import React from 'react';
import PropTypes from 'prop-types';
import css from './Feedback-button.module.css';

const FeedbackButton = ({ name, func }) => {
  return (
    <button type="button" className={css.feedBtn} onClick={func}>
      {name}
    </button>
  );
};

FeedbackButton.propTypes = {
  name: PropTypes.string.isRequired,
  func: PropTypes.func.isRequired,
};

export default FeedbackButton;
