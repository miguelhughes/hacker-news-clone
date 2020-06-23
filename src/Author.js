import React from "react";
import PropTypes from "prop-types";

const Author = ({ name }) => <span className="author">by {name}</span>;

Author.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Author;
