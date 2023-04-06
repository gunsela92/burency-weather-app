import React from "react";
import PropTypes from "prop-types";
import Card from "react-bootstrap/Card";

const WeatherCard = ({ weatherData }) => {

  return (
    <>
      <h3>Forecast (7 days)</h3>
      <div className="row">
        {weatherData.forecast?.forecastday?.map((day) => (
          <div className="col-md-3 mb-3" key={day.date}>
            <Card>
              <Card.Header>{day.date}</Card.Header>
              <Card.Body>
                <Card.Title>{
                  day.day.condition.text}</Card.Title>
                <Card.Text>
                  <img src={day.day.condition.icon} alt="" />{' '}
                  {day.day.maxtemp_c}&deg; / {day.day.mintemp_c}&deg;
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </>
  );
};

WeatherCard.propTypes = {
  weatherData: PropTypes.object.isRequired
};

export default WeatherCard;
