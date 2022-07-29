import React from "react";
import SearchResults from "./SearchResults";
import Widgets from "./Widgets";
import Pagination from "./Pagination";
class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      startDate: "",
      endDate: "",
      phoneNumber: "",
      queryResult: [],
      averageElapsed: null,
      displayData: [],
    };
  }
  getAverageElapsed = (array) => {
    if (array.length === 0) {
      return "00:00:00";
    }
    let totalTime = 0;
    for (let i = 0; i < array.length; i++) {
      if (array[i].fulfilledAt) {
        let startTime = new Date(array[i].date).getTime() / 1000;
        let endTime = new Date(array[i].fulfilledAt).getTime() / 1000;
        let SECONDS = Math.round(endTime - startTime);
        totalTime += SECONDS;
      }
    }
    let average = Math.round(totalTime / array.length);
    return new Date(average * 1000).toISOString().substr(11, 8);
  };
  submit() {
    if (!this.state.startDate || !this.state.endDate) {
      alert("Start Date and End Date are mandatory");
    } else {
      fetch(
        `http://localhost:3000/reporting?startDate=${this.state.startDate}&endDate=${this.state.endDate}&phoneNumber=${this.state.phoneNumber}`
      )
        .then((res) => res.json())
        .then(
          (result) => {
            let displayData = [];
            if (result.length != 0) {
              for (let i = 0; i < 49; i++) {
                if (i < result.length) {
                  if (result[i].status || result[i].status === "fulfilled") {
                    displayData.push(result[i]);
                  }
                }
                console.log(displayData);
              }
            }
            this.setState({
              isLoaded: true,
              queryResult: result,
              averageElapsed: this.getAverageElapsed(result),
              displayData: displayData,
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
  }
  paginateData = (start, stop) => {
    console.log("Start: " + start);
    console.log("Stop: " + stop);
    let displayData = [];

    for (let i = start; i < stop; i++) {
      if (stop > this.state.queryResult) {
        console.log("ruh roh");
      } else {
        displayData.push(this.state.queryResult[i]);
      }
    }
    this.setState({
      displayData: displayData,
    });
  };
  render() {
    return (
      <div className="container">
        <div className="searchbar">
          <label class="searchbar__label" for="start-date">
            Start Date
          </label>
          <input
            className="searchbar__date"
            type="date"
            id="start-date"
            onChange={(e) => {
              this.setState({ startDate: e.target.value });
            }}
          />

          <label class="searchbar__label" for="end-date">
            End Date
          </label>
          <input
            className="searchbar__date"
            type="date"
            id="end-date"
            onChange={(e) => {
              this.setState({ endDate: e.target.value });
            }}
          />
          <label className="searchbar__label" for="end-date">
            Phone Number
          </label>
          <input
            className="searchbar__text"
            type="search"
            id="phone"
            onChange={(e) => {
              this.setState({ phoneNumber: e.target.value });
            }}
          />
          <button
            className="searchbar__button"
            onClick={() => {
              this.submit();
            }}
          >
            Search
          </button>
        </div>
        <Widgets
          widgets={[
            { data: this.state.queryResult.length, title: "Total calls " },
            {
              data: this.state.averageElapsed,
              title: "Average Callback Wait",
            },
          ]}
        />
        {this.state.isLoaded ? (
          <SearchResults results={this.state.displayData} />
        ) : null}
        <Pagination
          data={this.state.queryResult}
          paginateData={this.paginateData}
        />
      </div>
    );
  }
}

export default SearchBar;
