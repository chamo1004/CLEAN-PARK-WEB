// AppointmentCard.js
import React from "react";

const AppointmentCard = ({ date, time, status, serviceType }) => {
  return (
    <article className="card">
      <div className="card-img">
        <div className="card-imgs pv delete">
          <p className="day-text">{date}</p>
        </div>
      </div>
      <div className="project-info">
        <div className="flex">
          <div className="time-text">{time}</div>
          <span className="tag">{status ? "Confirmed" : "Pending"}</span>
        </div>
        <a className="account">{serviceType}</a>
      </div>
    </article>
  );
};

export default AppointmentCard;
