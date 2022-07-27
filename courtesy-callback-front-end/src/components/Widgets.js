import React from "react";
import Widget from "./Widget";
import ProgressBar from "./ProgressBar";

const Widgets = (props) => {
  return (
    <div className="widgets">
      {props.widgets.map((widget) => {
        return (
          <Widget
            data={widget.data}
            title={widget.title}
            progressBar={widget.progressBar}
          />
        );
      })}
    </div>
    /*
    <div className="widgets">
      
      <Widget data={props.totalRequests} title={"Total Callback Requests"} />
      <Widget data={props.averageElapsed} title={"Average Callback Wait"} />
      <Widget
        data={props.fulfilledRequests}
        title={"Total Fulfilled Requests"}
        progressBar={
          <ProgressBar
            fulfilledRequests={props.fulfilledRequests}
            totalRequests={props.totalRequests}
          />
        }
      />

      <Widget
        data={props.unfulfilledRequests}
        title={"Total Unfulfilled Requests"}
      />
    </div>
    */
  );
};
export default Widgets;
