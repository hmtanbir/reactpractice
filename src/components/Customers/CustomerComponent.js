import React from 'react';
import PropTypes from 'prop-types';

const Customer = (props) => {
  return (
    <div>
      {props.name} - {props.city}
    </div>
  )
}

Customer.propTypes={
  name: PropTypes.string,
  city: PropTypes.string
}

export default Customer;
