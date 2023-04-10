import React from 'react';
import PropTypes from "prop-types";

const AlertArea = ({show, alert}) => {
  return (
    <div className="alert alert-danger" role="alert">
      {alert}
    </div>
  );
};

AlertArea.propTypes = {
  alert: PropTypes.any.isRequired,
  show: PropTypes.bool.isRequired
};

export default AlertArea;
