import React from "react";
import PropTypes from "prop-types";

const Title = ({ text }) => <span className="title">{text}</span>;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
