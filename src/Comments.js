import React from "react";
import PropTypes from "prop-types";

const Comments = ({ count }) => {
  const content = count > 0 ? count + " comments" : "discuss";
  return (
    <a className="count" href="#">
      {content}
    </a>
  );
};

Comments.propTypes = {
  count: PropTypes.number.isRequired,
};

export default Comments;
