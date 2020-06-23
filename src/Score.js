import React from "react";
import PropTypes from "prop-types";

const Score = ({ points }) => <span className="Score">{points} points</span>;

Score.propTypes = {
  points: PropTypes.number.isRequired,
};

export default Score;
