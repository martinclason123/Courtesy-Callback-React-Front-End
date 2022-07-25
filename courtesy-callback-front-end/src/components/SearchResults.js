import React from "react";

class SearchResults extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      result: props.results,
    };
  }
  render() {
    return (
      <div className="results">
        <div className="result-container">
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
        {this.props.results.map((call) => (
          <div className="data__record">
            <div className="data__record--field--fulfilled">
              {call.callbackNumber}
            </div>
            <div className="data__record--field--fulfilled">{call.status}</div>
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
  }
}
export default SearchResults;
