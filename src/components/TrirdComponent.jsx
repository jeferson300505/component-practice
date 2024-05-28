import React from 'react'
import PropTypes from 'prop-types'

export const TrirdComponent = ({name, lastname, card}) => {
  return (
    <div>
        <ul>
            <li>{name}</li>
            <li>{lastname}</li>
            <li>{card.height}</li>
        </ul>
    </div>
  )
}

TrirdComponent.propTypes = {
  name: PropTypes.string,
  lastname: PropTypes.string,
  card: PropTypes.object
}