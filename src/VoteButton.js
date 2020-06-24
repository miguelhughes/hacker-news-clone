import React from "react";
import "@fortawesome/fontawesome-free/css/all.min.css"; //this is not the best way to use font awesome. there's a react component now, but using this way for similarity with the tutorial.

const VoteButton = () => (
  <a className="vote-button" href="/">
    <i className="fa fa-caret-up" />
  </a>
);

export default VoteButton;
