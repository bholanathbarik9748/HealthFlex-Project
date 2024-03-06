import { useEffect, useState } from "react";
import {
  getCityNameHandler,
  getForecastWeather,
  locationWeatherHandler,
} from "../../api/apiHandler";
import LoadingComponent from "../Loading/Loading";
import ReportComponent from "../Report/Report";
import ForecastComponents from "../Forecast/Forecast";

const SearchBar = () => {
  // State variables
  const [Search, setSearch] = useState(""); // For storing search query
  const [Location, SetLocation] = useState({}); // For storing location data
  const [Current, SetCurrent] = useState({}); // For storing current weather data
  const [loading, setLoading] = useState(false); // For managing loading state
  const [Forecast, setForecast] = useState({}); // For storing forecast data
  const [latlong, setLatLong] = useState({ latitude: "", longitude: "" }); // For latitude and longitude

  // Function to handle input change
  const onChangeHandler = (events) => {
    setSearch(events.target.value);
  };

  // Function to fetch location and current weather data
  const FetchData = async () => {
    try {
      setLoading(true);
      const response = await locationWeatherHandler(Search);
      setLoading(false);
      SetLocation(response.location);
      SetCurrent(response.current);
    } catch (error) {
      console.log(error);
    }
  };

  // Function to fetch forecast data
  const getForecast = async () => {
    try {
      setLoading(true);
      const response = await getForecastWeather(
        latlong.latitude,
        latlong.longitude
      );
      setForecast(response);
      setLoading(false);
    } catch (error) {
      console.error("Error getting city name:", error);
    }
  };

  // Effect hook to get user's current location on component mount
  useEffect(() => {
    const getLocation = () => {
      if (navigator.geolocation) {
        setLoading(true);
        navigator.geolocation.getCurrentPosition(
          async (position) => {
            getCityName(position.coords.latitude, position.coords.longitude);
            setLatLong({
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            });
          },
          (error) => {
            console.error("Error getting current location:", error);
          }
        );
        setLoading(false);
      } else {
        console.error("Geolocation is not supported by this browser.");
      }
    };

    const getCityName = async (latitude, longitude) => {
      try {
        setLoading(true);
        const response = await getCityNameHandler(latitude, longitude);
        const data = response.data[0];
        const cityName = data.name;
        setLoading(false);
        setSearch(cityName);
      } catch (error) {
        console.error("Error getting city name:", error);
      }
    };

    getLocation();
  }, []);

  // Effect hook to fetch data whenever search query changes
  useEffect(() => {
    FetchData();
    getForecast(Search);
  }, [Search]);

  // Render
  return (
    <>
      <div className="container" style={{ margin: "auto" }}>
        <form className="flex items-center my-6">
          <label htmlFor="simple-search" className="sr-only">
            Search city...
          </label>
          <div className="relative w-full">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              onChange={onChangeHandler}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              required
            />
          </div>
        </form>
      </div>
      {loading ? (
        <LoadingComponent />
      ) : (
        <>
          <ReportComponent Location={Location} Current={Current} />
          <ForecastComponents data={Forecast} />
        </>
      )}
    </>
  );
};

export default SearchBar;
