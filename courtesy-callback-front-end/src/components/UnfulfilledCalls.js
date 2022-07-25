import React, { Children, Component } from "react";
class UnfulfilledCalls extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="data">
        <div className="data__record--title">Unfulfilled Calls</div>
        <div className="data__record--header">
          <div className="data__record--field--header">Callback Number</div>
          <div className="data__record--field--header">Status</div>
          <div className="data__record--field--header">Time Requested</div>
          <div className="data__record--field--header">Time Elapsed</div>
        </div>
        {this.props.props.map((call) => (
          <div className="data__record">
            <div className="data__record--field">{call.callbackNumber}</div>
            <div className="data__record--field">{call.status}</div>
            <div className="data__record--field">{call.formattedDate}</div>
            <div className="data__record--field">{call.elapsedTime}</div>
          </div>
        ))}
      </div>
    );
  }
}
export default UnfulfilledCalls;
