import React from 'react'
import PropTypes from 'prop-types'
import css from './Func-item-render.module.css'

const FuncItemRender = ({ title, func, percent=""}) => {
  return <li className={css.funcItem}>
    {isNaN(func) ? `${title}: 0${percent}`:`${title}: ${func}${percent}`}</li>;
};

FuncItemRender.propTypes = {
    title: PropTypes.string.isRequired,
    func: PropTypes.oneOfType(
      [PropTypes.string,
      PropTypes.number]
    ).isRequired,
    percent: PropTypes.string
}

export default FuncItemRender