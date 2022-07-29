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
  );
};
export default Widgets;
