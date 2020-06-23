import React from "react";
import PropTypes from "prop-types";
import Story from "./Story";
import Header from "./Header";

const Stories = ({ stories }) => {
  return (
    <div className="story-container">
      <Header />
      {stories.map((story) => (
        <Story key={story.id} story={story} />
      ))}
    </div>
  );
};

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object),
};

export default Stories;
