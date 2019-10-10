import React from "react";

const DateInput = props => {
  return (
    <div className="date-card " >
        <input type="date" value={props.date} onChange={props.handleChange} />
      <h2>date: {props.date}</h2>
    </div>
  );
};
export default DateInput;