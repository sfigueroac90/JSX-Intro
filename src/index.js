import React from "react";
import ReactDOM from "react-dom";

//var React = require("react"); // OLD STYLE
//var ReactDOM = require("react-dom"); // OLD STYLE

ReactDOM.render(
  <div>
    <h1>Hello World!</h1>
    <p>This is a paragraph.</p>
  </div>,
  document.getElementById("root")
);

/* OLD STYLE */
//Do not use. Just to compare
//var h1 = document.createElement("h1");
//h1.innerHTML = "Hello World 2";
//document.getElementById("root").appendChild(h1);
