import ReactDOM from "react-dom";
import React from "react";
import { storyData } from "./storyData";
import Stories from "./Stories";

const element = <Stories stories={storyData} />;

ReactDOM.render(element, document.getElementById("root"));
