import axios from "axios";

export const fetchWeather = (lat, long) => async (dispatch) => {
  const response = await axios.get(
    `https://api.weatherapi.com/v1/current.json?key=0429ae3366144dee81b115658231007&q=${lat},${long}&aqi=yes`
  );
  dispatch({ type: "GET_WEATHER", payload: response.data });
};

export const fetchLocation = (long, lat) => async (dispatch) => {
  const response = await axios.get(
    `https://us1.locationiq.com/v1/reverse.php?key=pk.a175dc8de64a59bb88e06d6a4aa3987c&lat=${lat}&lon=${long}&format=json`
  );
  // console.log(response)
  dispatch({ type: "GET_LOCATION", payload: response.data });
};

export const fetchForecast = (lat, long) => async (dispatch) => {
  const response =
    await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=0429ae3366144dee81b115658231007 &q=${lat},${long}&days=5&alerts=no
  `);
  // console.log(response);
  dispatch({ type: "FETCH_FORECAST", payload: response.data });
};
