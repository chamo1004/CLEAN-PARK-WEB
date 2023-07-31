import React, { Component } from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";

import "./calendar.css";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

class Calendarr extends Component {
  state = {
    events: [
      {
        start: moment().toDate(),
        end: moment().add(1, "days").toDate(),
        title: "Some title",
      },
    ],
    selectedSlot: null,
  };

  handleSelectSlot = (slotInfo) => {
    this.setState({ selectedSlot: slotInfo });
  };

  handleCloseForm = () => {
    this.setState({ selectedSlot: null });
  };

  renderForm() {
    // You can define your form component here and return it
    // Example:
    // return <MyFormComponent onClose={this.handleCloseForm} />;
  }

  render() {
    return (
      <div className="App">
        {this.state.selectedSlot && this.renderForm()}
        <Calendar
          localizer={localizer}
          defaultDate={new Date()}
          views={["month", "day"]}
          defaultView="month"
          events={this.state.events}
          style={{ height: "100vh" }}
          selectable={true} // Allow selecting slots
          onSelectSlot={this.handleSelectSlot} // Handle slot selection
        />
      </div>
    );
  }
}

export default Calendarr;
