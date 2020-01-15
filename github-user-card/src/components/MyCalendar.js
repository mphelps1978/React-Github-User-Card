import React from "react";
import CalendarHeatmap from "react-calendar-heatmap";

function MyCalendar() {
  const style = {
    margin: `0 auto`,
    width: `75%`,
  };

  return (
    <div style={style}>
      <CalendarHeatmap
        startDate={new Date("2019-01-01")}
        endDate={new Date("2020-12-31")}
        values={[
          { date: "2019-01-01" },
          { date: "2019-01-07" },
          { date: "2019-01-14" },
          { date: "2019-01-21" },
          // ...and so on
        ]}
      />
    </div>
  );
}

export default MyCalendar;
