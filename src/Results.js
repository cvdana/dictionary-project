import React from "react";
import Meaning from "./Meaning";

export default function Response(props) {
  if (props.results) {
    return (
      <div className="Results">
        <section>
          <h2>{props.results.word}</h2>
          <em>/'{props.results.phonetic}/</em>
        </section>
        {props.results.meanings.map((meaning, index) => {
          return (
            <div key={index}>
              <section>
                <Meaning meaning={meaning} />
              </section>
            </div>
          );
        })}
      </div>
    );
  } else {
    return null;
  }
}
