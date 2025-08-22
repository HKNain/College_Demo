import React, { useState } from "react";
import eventsData from "../../data/eventsData.json"; 

const Events = () => {
  const [selectedYear, setSelectedYear] = useState("2017");

  const years = Object.keys(eventsData); 

  return (
    <div className="w-full flex bg-blue-50 flex-col justify-center items-center"> 
      <h1 className="text-3xl font-semibold text-blue-950 mt-10">
        EVENTS
      </h1>

      <h3 className="text-gray-400 text-lg mt-3">
        Here is our event schedule
      </h3>

      <div className="w-10 bg-red-600 h-1 my-5"></div>

      {/* Year Tabs */}
      <div className="flex flex-wrap gap-4 my-5">
        {years.map((year) => (
          <button
            key={year}
            onClick={() => setSelectedYear(year)}
            className={`px-6 py-2 rounded-full font-semibold ${
              selectedYear === year ? "bg-red-500 text-white" : "bg-blue-900 text-white"
            }`}
          >
            {year}
          </button>
        ))}
      </div>

      {/* Events List */}
      <div className="w-3/4 mt-5">
        {eventsData[selectedYear].map((event, index) => (
          <div key={index} className="mb-6 border-b border-gray-300 pb-4">
            <p className="text-gray-600">{event.date}</p>
            <h2 className="text-xl font-bold text-blue-950 mt-1">{event.title}</h2>
            <p className="text-blue-900 italic">{event.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Events;
