import React from "react";
import { WiThermometer } from "react-icons/wi"; // Importing a thermometer icon from React Icons

// Function to format time in 12-hour format with AM/PM indicator
const formatTime = (timeString) => {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM"; // Determining AM or PM
  const formattedHours = hours % 12 || 12; // Converting to 12-hour format
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes; // Adding leading zero if minutes < 10
  return `${formattedHours}:${formattedMinutes} ${period}`; // Constructing formatted time string
};

// Timeline component to display temperature intervals
const Timeline = ({ timeline }) => {
  // Sort intervals by start time
  const sortedIntervals = timeline?.intervals?.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  return (
    <div className="border p-4 m-4">
      <div className="grid grid-cols-2 gap-4">
        {/* Mapping through sorted intervals and displaying start time and temperature */}
        {sortedIntervals?.map((interval, index) => (
          <div key={index} className="border p-2">
            <p className="font-semibold">
              Start Time: {formatTime(interval.startTime)}{" "}
              {/* Displaying formatted start time */}
            </p>
            <p>
              <WiThermometer className="inline-block mr-1" />{" "}
              {/* Thermometer icon */}
              Temperature: {interval.values.temperature} °C{" "}
              {/* Displaying temperature */}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

// ForecastComponents component to display timelines
const ForecastComponents = ({ data }) => {
  return (
    <>
      <div className="container mx-auto">
        {/* Mapping through timelines and rendering Timeline component */}
        {data?.data?.data?.timelines?.map((timeline, index) => (
          <Timeline key={index} timeline={timeline} />
        ))}
      </div>
    </>
  );
};

export default ForecastComponents;
