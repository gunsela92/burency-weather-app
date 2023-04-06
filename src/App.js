import React, { useState, useEffect } from 'react';
import WeatherServices from "./Services/weather-services";
import usePageVisibility from "./helpers/usePageVisibility";
import {getCurrentLocation} from "./Services/location-services";
import WeatherCard from "./Components/WeatherCard";
import SearchArea from "./Components/Search";
import AlertArea from "./Components/Alert";
import SpinnerArea from "./Components/Spinner";

function App() {
  const [location, setLocation] = useState(null);
  const [permissionDenied, setPermissionDenied] = useState(false);
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [searchQuery, setSearchQuery] = useState(null);
  const focused = usePageVisibility();

  useEffect(() => {
    const getPosition = async () => {
      try {
        const result = await getCurrentLocation();
        setLocation(result)
      } catch (e) {
        console.log(e)
        setPermissionDenied(true);
      }
    }
    getPosition();
  }, []);

  useEffect(() => {
    // Fetch weather data when location is available
    if (location) {
      setLoading(true);
      setPermissionDenied(false)
      fetchWeatherData()
    } else {
      setPermissionDenied(true);
    }
  }, [location]);

  const fetchWeatherData = async () => {
    try {
      const res = await WeatherServices.getWeather(location.latitude, location.longitude);
      if (res?.data) {
        setWeatherData(res.data);
        setLoading(false);
      }
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(location, focused)
      if (location && focused) {
        if (searchQuery) {
          fetchSearchResults(searchQuery)
        } else {
          fetchWeatherData()
        }
      }
    }, 5000);
    return () => clearInterval(interval);
  }, [focused, location, searchQuery]);

  const fetchSearchResults = async (query) => {
    try {
      const response = await WeatherServices.getWeatherByQuery(query);
      setWeatherData(response.data);
      setSearchQuery(query);
      setLoading(false);
    } catch (e) {
      console.log(e)
    }
  }

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData(event.target);
      const query = formData.get('search-query');
      fetchSearchResults(query);
    } catch (e) {
      console.log(e)
    }
  };

  return (
    <div className="container mt-3">
      <h1>Weather App</h1>
      <hr />
      {permissionDenied && !weatherData && (
        <AlertArea />
      )}
      <SearchArea handleFormSubmit={handleFormSubmit} />
      <hr />
      <SpinnerArea show={loading} />
      {weatherData && (
        <WeatherCard weatherData={weatherData} />
      )}
    </div>
  );
}

export default App;