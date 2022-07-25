import React from "react";

const Widgets = (props) => {
  let percentage =
    Math.floor(
      (props.fulfilledRequests / props.totalRequests) * 100
    ).toString() + "%";

  return (
    <div className="widgets">
      <div className="widgets__widget">
        <div className="widget__title">Total Callback Requests</div>
        <div className="widget__data">{props.totalRequests}</div>
      </div>
      <div className="widgets__widget">
        <div className="widget__title">Average Callback Wait</div>
        <div className="widget__data">{props.averageElapsed}</div>
      </div>
      <div className="widgets__widget">
        <div className="widget__title">Total Fulfilled Requests</div>
        <div className="widget__data">{props.fulfilledRequests}</div>
        <div className="widget__progress">
          <div className="widget__data--bar">
            <div
              className="widget__data--percentage"
              style={{ width: percentage }}
            ></div>
          </div>
        </div>
      </div>
      <div className="widgets__widget">
        <div className="widget__title">Total Unfulfilled Requests</div>
        <div className="widget__data">{props.unfulfilledRequests}</div>
      </div>
    </div>
  );
};
export default Widgets;
