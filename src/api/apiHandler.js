import axios from "axios";

export const locationWeatherHandler = async (search) => {
  try {
    const response = await axios.get(
      `https://api.weatherapi.com/v1/current.json?key=1be516bdcd9547ab942150829230704&q=${search}&aqi=no`
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      console.log("Error response from server:", error.response.data);
      console.log("Status code:", error.response.status);
      throw error.response.status;
    } else if (error.request) {
      console.log("No response received:", error.request);
      throw 503; // Service Unavailable
    } else {
      console.log("Error setting up the request:", error.message);
      throw 500; // Internal Server Error
    }
  }
};

export const getCityNameHandler = async (latitude, longitude) => {
  try {
    const response = await axios.get(
      `https://api.openweathermap.org/geo/1.0/reverse?lat=${latitude}&lon=${longitude}&limit=1&appid=637710a51fa84a87f966380bb9e27e82`
    );
    return response;
  } catch (error) {
    if (error.response) {
      console.log("Error response from server:", error.response.data);
      console.log("Status code:", error.response.status);
      throw error.response.status;
    } else if (error.request) {
      console.log("No response received:", error.request);
      throw 503; // Service Unavailable
    } else {
      console.log("Error setting up the request:", error.message);
      throw 500; // Internal Server Error
    }
  }
};

export const getForecastWeather = async (lat, long) => {
  if (!lat || !long) {
    return {};
  }
  try {
    const response = await axios.get(
      `https://api.tomorrow.io/v4/timelines?location=${lat},${long}&fields=temperature&timesteps=1h&units=metric&apikey=SPemJ3dNVioPoDgNq23qfDmTRowYGEP2`
    );
    return response;
  } catch (error) {
    if (error.response) {
      console.log("Error response from server:", error.response.data);
      console.log("Status code:", error.response.status);
      throw error.response.status;
    } else if (error.request) {
      console.log("No response received:", error.request);
      throw 503; // Service Unavailable
    } else {
      console.log("Error setting up the request:", error.message);
      throw 500; // Internal Server Error
    }
  }
};
