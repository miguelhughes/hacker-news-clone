import React from "react";
import PropTypes from "prop-types";
import VoteButton from "./VoteButton";

const Rank = ({ position }) => {
  return (
    <div className="rank">
      {position}.
      <VoteButton />
    </div>
  );
};

Rank.propTypes = {
  position: PropTypes.number.isRequired,
};

export default Rank;
