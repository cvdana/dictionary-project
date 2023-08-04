import React from "react";

export default function Response(props) {
  if (props.results) {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
      </div>
    );
  } else {
    return null;
  }
}
