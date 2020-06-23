import React from "react";
import PropTypes from "prop-types";

const Domain = ({ url }) => {
  if (url) return <span className="domain">({url})</span>;
  else return null;
};

Domain.propTypes = {
  url: PropTypes.string,
};
export default Domain;
