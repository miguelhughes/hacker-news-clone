import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import PropTypes from "prop-types";

class RawFileLoader extends Component {
  constructor() {
    super();
    this.state = { markdown: "loading..." };
  }

  componentDidMount() {
    if (this.props.url) {
      fetch(this.props.url)
        .then((res) => res.text())
        .then((text) => this.setState({ markdown: text }));
    }
  }

  render() {
    const { markdown } = this.state;
    return <ReactMarkdown source={markdown} escapeHtml={false} />;
  }
}
RawFileLoader.propTypes = {
  url: PropTypes.string,
};
export default RawFileLoader;
