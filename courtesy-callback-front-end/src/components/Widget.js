import React from "react";

const Widget = (props) => {
  return (
    <div className="widgets__widget">
      <div className="widget__title">{props.title}</div>
      <div className="widget__data">{props.data}</div>
      {props.progressBar ? (
        <div className="widget__progress">{props.progressBar}</div>
      ) : null}
    </div>
  );
};

export default Widget;
