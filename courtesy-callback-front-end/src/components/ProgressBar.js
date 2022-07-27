import React from "react";

const ProgressBar = (props) => {
  let percentage =
    Math.floor(
      (props.fulfilledRequests / props.totalRequests) * 100
    ).toString() + "%";

  return (
    <div className="widget__data--bar">
      <div
        className="widget__data--percentage"
        style={{ width: percentage }}
      ></div>
    </div>
  );
};
export default ProgressBar;
