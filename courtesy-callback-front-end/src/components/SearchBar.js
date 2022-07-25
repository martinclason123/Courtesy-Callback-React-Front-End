import React from "react";
import SearchResults from "./SearchResults";
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
    };
  }
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
            this.setState({
              isLoaded: true,
              queryResult: result,
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
  render() {
    return (
      <div class="container">
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
        {this.state.isLoaded ? (
          <SearchResults results={this.state.queryResult} />
        ) : null}
      </div>
    );
  }
}

export default SearchBar;
