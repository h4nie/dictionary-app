import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <h2>{props.results.word}</h2>
        <Phonetics phonetics={props.results.phonetics} />
        <br />
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <h5>{meaning.partOfSpeech}</h5>
                <div>
                  <Definitions definitions={meaning.definitions} />
                  <Synonyms synonyms={meaning.synonyms} />
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
