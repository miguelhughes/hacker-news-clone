import React from "react";
import PropTypes from "prop-types";
import Score from "./Score";
import Author from "./Author";
import Time from "./Time";
import HideButton from "./HideButton";
import Comments from "./Comments";

const Details = ({ story }) => {
  return (
    <div className="details">
      <Score points={story.points} />
      <Author name={story.author} />
      <Time time={story.date} />
      | <HideButton /> |
      <Comments count={story.comments} />
    </div>
  );
};

Details.propTypes = {
  story: PropTypes.shape({
    points: PropTypes.number.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    comments: PropTypes.number.isRequired,
  }),
};
export default Details;
