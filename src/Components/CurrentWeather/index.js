import React from 'react';
import PropTypes from 'prop-types';

const CurrentWeatherArea = ({weatherData}) => {

  return (
    <>
      <h3>{weatherData.location?.name} / {weatherData.location?.country}</h3>
          <div className="card">
            <div className="card-header text-center d-block">Current</div>
            <div className="card-body">
              <h5 className="card-title text-center">{weatherData.current?.condition.text}</h5>
              <p className="card-text d-flex justify-content-center flex-column align-items-center">
                <img src={weatherData.current?.condition.icon} alt="" />
                <span className={"fs-4 mt-3"}>{weatherData.current?.temp_c}&deg;</span>
              </p>
            </div>
          </div>
    </>

  );
};

CurrentWeatherArea.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default CurrentWeatherArea;
