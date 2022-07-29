import React from "react";

const Pagination = (props) => {
  let links = Math.ceil(props.data.length / 50);

  let linksArray = [];

  let start = 0;
  let finish = 49;
  for (let i = 1; i <= links; i++) {
    let myStart = start;
    let myFinish = finish;
    linksArray.push(
      <button
        className="pagination__button"
        onClick={() => {
          props.paginateData(myStart, myFinish);
        }}
      >
        {i}
      </button>
    );
    start = start + 50;
    finish = finish + 50;
    if (finish > props.data.length) {
      finish = props.data.length;
    }
  }

  return (
    <div className="pagination">
      <div className="pagination__links">
        {linksArray.map((link) => {
          return link;
        })}
      </div>
    </div>
  );
};
export default Pagination;
