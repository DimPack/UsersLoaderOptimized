import React from "react";
import PropTypes from 'prop-types';

const InputResults = ({ currentResults, quantityPage, handlerResults = () => {} }) => {
  return (
    <label>
      <input
        name="results"
        type="radio"
        value={quantityPage}
        checked={currentResults === quantityPage}
        onChange={handlerResults}
      />
      {quantityPage}
    </label>
  );
};

InputResults.propTypes = {
    currentResults: PropTypes.number.isRequired,
    quantityPage: PropTypes.number.isRequired,
    handlerResults: PropTypes.func
  };
  
export default InputResults;
