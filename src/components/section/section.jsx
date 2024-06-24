import React from 'react';
import PropTypes from 'prop-types';
import css from './Section.module.css';

const Section = ({ title, render, reactComp }) => {
  return (
    <section className={css.container}>
      <h2>{title}</h2>
      {title === 'Please leave feedback' ? (
        <div className={css.btnsLayout}>{render}</div>
      ) : (
        <ul>{render}{reactComp}</ul>
      )}
    </section>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  render: PropTypes.array,
  reactComp: PropTypes.element
};

export default Section;
