import React from "react";
import Definitions from "./Definitions";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Meaning">
        <h2>{props.results.word}</h2>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <h5>{meaning.partOfSpeech}</h5>
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
