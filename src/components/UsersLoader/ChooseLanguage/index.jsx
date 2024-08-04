import React from "react";
import PropTypes from "prop-types";

const ChooseLanguage = ({ currentNat, handlerNat = () => {} }) => {
  return (
    <select name="nat" value={currentNat} onChange={handlerNat}>
      <option value="us">us</option>
      <option value="dk">dk</option>
      <option value="fr">fr</option>
      <option value="gb">gb</option>
    </select>
  );
};
ChooseLanguage.propTypes = {
  currentNat: PropTypes.string.isRequired,
  handlerNat: PropTypes.func,
};

export default ChooseLanguage;
