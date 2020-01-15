import React from "react";
import Calendar from "react-github-contribution-calendar";

function MyCalendar() {
  var values = {};
  var until = "2020-08-31";
  var weekNames = ["s", "m", "t", "w", "t", "f", "s"];
  var monthNames = [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
  ];

  const style = {
    margin: `0 auto`,
    paddingLeft: "31%",
  };

  return (
    <div style={style}>
      <Calendar
        values={values}
        until={until}
        weekNames={weekNames}
        monthNames={monthNames}
      />
    </div>
  );
}

export default MyCalendar;
