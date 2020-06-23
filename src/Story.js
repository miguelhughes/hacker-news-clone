import React from "react";
import PropTypes from "prop-types";
import StoryHeader from "./StoryHeader";
import Details from "./Details";
import "./Story.css";
import Rank from "./Rank";

const Story = ({ story }) => {
  return (
    <div className="story">
      <Rank position={story.position} />
      <div>
        <StoryHeader title={story.title} domain={story.site} />
        <Details story={story} />
      </div>
    </div>
  );
};

Story.propTypes = {
  story: PropTypes.object,
};
export default Story;
