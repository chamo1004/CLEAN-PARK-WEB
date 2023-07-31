import React, { useState } from "react";
import "./MonthCalender.css";
const MonthCalendar = () => {
  const [events, setEvents] = useState({}); // State to store events (each day can have multiple events)

  // Function to handle click on a day cell
  const handleDayClick = (day) => {
    const eventText = prompt("Enter event for this day:");
    if (eventText) {
      setEvents((prevEvents) => ({
        ...prevEvents,
        [day]: [...(prevEvents[day] || []), eventText],
      }));
    }
  };

  // Function to get the number of days in a month
  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Function to generate an array of days in the month
  const generateDaysArray = (year, month) => {
    const daysInMonth = getDaysInMonth(year, month);
    const daysArray = [];
    for (let day = 1; day <= daysInMonth; day++) {
      daysArray.push(new Date(year, month, day));
    }
    return daysArray;
  };

  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const daysInCurrentMonth = generateDaysArray(currentYear, currentMonth);

  return (
    <div className="month-calendar">
      <h2>
        {currentDate.toLocaleString("default", { month: "long" })} {currentYear}
      </h2>
      <div className="calendar-grid">
        {daysInCurrentMonth.map((day) => (
          <div
            key={day}
            className="day-cell"
            onClick={() => handleDayClick(day.toDateString())}
          >
            <span className="day-number">{day.getDate()}</span>
            {events[day.toDateString()] && (
              <ul className="events-list">
                {events[day.toDateString()].map((event, index) => (
                  <li key={index}>{event}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MonthCalendar;
