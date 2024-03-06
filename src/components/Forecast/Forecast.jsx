import React from "react";
import { WiThermometer } from "react-icons/wi"; // Importing a thermometer icon from React Icons

const formatTime = (timeString) => {
  const date = new Date(timeString);
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const period = hours >= 12 ? "PM" : "AM";
  const formattedHours = hours % 12 || 12;
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
  return `${formattedHours}:${formattedMinutes} ${period}`;
};

const Timeline = ({ timeline }) => {
  // Sort intervals by start time
  const sortedIntervals = timeline?.intervals?.sort((a, b) => {
    return new Date(a.startTime) - new Date(b.startTime);
  });

  return (
    <div className="border p-4 m-4">
      <div className="grid grid-cols-2 gap-4">
        {sortedIntervals?.map((interval, index) => (
          <div key={index} className="border p-2">
            <p className="font-semibold">
              Start Time: {formatTime(interval.startTime)}
            </p>
            <p>
              <WiThermometer className="inline-block mr-1" />
              Temperature: {interval.values.temperature} °C
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

const ForecastComponents = ({ data }) => {
  return (
    <>
      <div className="container mx-auto">
        {data?.data?.data?.timelines?.map((timeline, index) => (
          <Timeline key={index} timeline={timeline} />
        ))}
      </div>
    </>
  );
};

export default ForecastComponents;
