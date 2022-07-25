import React from "react";
import FulfilledCallbacks from "./FulfilledCallbacks";
import WaitingCalls from "./WaitingCalls";
import Widgets from "./Widgets";

class LiveData extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      fulfilled: [],
      unfulfilled: [],
      totalRequests: "",
      averageElapsed: "",
    };
  }
  componentDidMount() {
    this.getLiveData();
    setInterval(() => {
      this.getLiveData();
    }, 1000);
  }
  getAverageElapsed = (array) => {
    if (array.length === 0) {
      return "00:00:00";
    }
    let totalTime = 0;
    for (let i = 0; i < array.length; i++) {
      let startTime = new Date(array[i].date).getTime() / 1000;
      let endTime = new Date(array[i].fulfilledAt).getTime() / 1000;
      let SECONDS = Math.round(endTime - startTime);
      totalTime += SECONDS;
    }
    let average = Math.round(totalTime / array.length);
    return new Date(average * 1000).toISOString().substr(11, 8);
  };
  getLiveData() {
    fetch(
      "http://localhost:3000/dashboard?token=821004e3-2e54-43d8-a4aa-18ecaf9e3113"
    )
      .then((res) => res.json())
      .then(
        (result) => {
          let fulfilledCalls = [];
          let unfulfilledCalls = [];
          for (let i = 0; i < result.length; i++) {
            if (result[i].status === "fulfilled") {
              fulfilledCalls.push(result[i]);
            } else {
              unfulfilledCalls.push(result[i]);
            }
          }

          this.setState({
            isLoaded: true,
            unfulfilled: unfulfilledCalls,
            fulfilled: fulfilledCalls,
            totalRequests: result.length,
            averageElapsed: this.getAverageElapsed(fulfilledCalls),
          });
        },
        // Note: it's important to handle errors here
        // instead of a catch() block so that we don't swallow
        // exceptions from actual bugs in components.
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      );
  }
  render() {
    const { error, isLoaded, unfulfilled } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <Widgets
            totalRequests={this.state.totalRequests}
            fulfilledRequests={this.state.fulfilled.length}
            unfulfilledRequests={this.state.unfulfilled.length}
            averageElapsed={this.state.averageElapsed}
          />
          <div className="live">
            <WaitingCalls props={this.state.unfulfilled} />
            <FulfilledCallbacks props={this.state.fulfilled} />
          </div>
        </div>
      );
    }
  }
}
export default LiveData;
