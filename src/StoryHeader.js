import React from "react";
import PropTypes from "prop-types";
import Title from "./Title";
import Domain from "./Domain";

const StoryHeader = ({ title, domain }) => {
  return (
    <div className="story-header">
      <Title text={title} />
      <Domain url={domain} />
    </div>
  );
};

StoryHeader.propTypes = {
  title: PropTypes.string,
  domain: PropTypes.string,
};
export default StoryHeader;
