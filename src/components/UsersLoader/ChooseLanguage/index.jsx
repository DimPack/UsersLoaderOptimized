import React from "react";
import PropTypes from "prop-types";

const nats =['us', 'dk', 'fr', 'gb'];
const ChooseLanguage = ({ currentNat, handlerNat = () => {} }) => {
  const showOptions = (nat, i) => <option key={i} value={nat}>{nat}</option>
  return (
    <select name="nat" value={currentNat} onChange={handlerNat}>
      {nats.map(showOptions)}
    </select>
  );
};
ChooseLanguage.propTypes = {
  currentNat: PropTypes.string.isRequired,
  handlerNat: PropTypes.func,
};

export default ChooseLanguage;
