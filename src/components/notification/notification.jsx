import React from 'react'
import PropTypes from 'prop-types'

const Notification = ({messege}) => {
  return (
    <div>{messege}</div>
  )
}

Notification.propTypes = {
    messege: PropTypes.string.isRequired
}

export default Notification