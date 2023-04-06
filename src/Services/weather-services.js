import axios from "axios";

const getWeather = (lat, lon) => {
  return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8a252ef9c55640b98fd214532230404&q=${lat},${lon}&days=7`)
}

const getWeatherByQuery = (query) => {
  return axios.get(`https://api.weatherapi.com/v1/forecast.json?key=8a252ef9c55640b98fd214532230404&q=${query}&days=7`)
}

const modules = {
  getWeather,
  getWeatherByQuery
}

export default modules;