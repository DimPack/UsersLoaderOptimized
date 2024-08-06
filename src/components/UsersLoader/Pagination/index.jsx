import React from "react";

const Pagination = ({currentPage, prevPage, nextPage}) => {


  return (
    <div>
      <button onClick={prevPage}>&lt; </button>
      <span> {currentPage} </span>
      <button onClick={nextPage}>&gt;</button>
    </div>
  );
};

export default Pagination;
