import React from 'react';
import PropTypes from 'prop-types';
import Spinner from "react-bootstrap/Spinner";

const SpinnerArea = ({show}) => {
  return (
    <>
      {show && (
        <div className="d-flex justify-content-center my-3">
          <Spinner animation="border" role="status">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        </div>
      )}
    </>
  );
};

SpinnerArea.propTypes = {
  show: PropTypes.bool.isRequired
};

export default SpinnerArea;
