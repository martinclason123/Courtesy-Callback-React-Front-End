import React, { Children, Component } from "react";
import UnfulfilledCalls from "./UnfulfilledCalls";

class WaitingCalls extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
    };
  }
  componentDidMount() {
    this.setState({ isLoaded: true });
  }

  render() {
    const { error, isLoaded, unfulfilled } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return <UnfulfilledCalls props={this.props.props} />;
    }
  }
}
export default WaitingCalls;
