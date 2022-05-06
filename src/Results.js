import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Meaning">
        <h3>{props.results.word}</h3>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <div>{meaning.partOfSpeech}</div>
                <div>
                  <Definitions definitions={meaning.definitions} />
                </div>
                <br />
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
