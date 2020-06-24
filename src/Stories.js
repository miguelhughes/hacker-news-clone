import React from "react";
import PropTypes from "prop-types";
import Story from "./Story";
import Header from "./Header";
import ReadmeViewer from "./ReadmeViewer";

const Stories = ({ stories }) => {
  return (
    <>
      <ReadmeViewer repoName={"hacker-news-clone"} />
      <div className="story-container">
        <Header />
        {stories.map((story) => (
          <Story key={story.position} story={story} />
        ))}
      </div>
    </>
  );
};

Stories.propTypes = {
  stories: PropTypes.arrayOf(PropTypes.object),
};

export default Stories;
