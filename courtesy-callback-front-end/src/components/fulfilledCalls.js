import React, { Children, Component } from "react";
class FulfilledCalls extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (this.props.props.length > 0) {
      return (
        <div className="data">
          <div className="data__record--title">Fulfilled Calls</div>
          <div className="data__record--header">
            <div className="data__record--field--header--fulfilled">
              Callback Number
            </div>
            <div className="data__record--field--header--fulfilled">Status</div>
            <div className="data__record--field--header--fulfilled">Agent</div>
            <div className="data__record--field--header--fulfilled">
              Time Requested
            </div>
            <div className="data__record--field--header--fulfilled">
              Time Fulfilled
            </div>
          </div>
          {this.props.props.map((call) => (
            <div className="data__record">
              <div className="data__record--field--fulfilled">
                {call.callbackNumber}
              </div>
              <div className="data__record--field--fulfilled">
                {call.status}
              </div>
              <div className="data__record--field--fulfilled">{call.agent}</div>
              <div className="data__record--field--fulfilled">
                {call.formattedDate}
              </div>
              <div className="data__record--field--fulfilled">
                {call.fulfilledAtFormatted}
              </div>
            </div>
          ))}
        </div>
      );
    } else {
      return (
        <div className="data">
          <div className="data__record--title">Fulfilled Calls</div>
          <div>No Fulfilled Calls Yet</div>
        </div>
      );
    }
  }
}
export default FulfilledCalls;
