import React from "react";
import Definitions from "./Definitions";
import Synonyms from "./Synonyms";
import Phonetics from "./Phonetics";
import "./Results.css";

export default function Results(props) {
  if (props.results === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <section>
          {" "}
          <h2>{props.results.word}</h2>
          <Phonetics phonetics={props.results.phonetics} />
        </section>
        <div>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <section>
                  <h5>{meaning.partOfSpeech}</h5>
                  <div>
                    <Definitions definitions={meaning.definitions} />
                    <Synonyms synonyms={meaning.synonyms} />
                  </div>
                </section>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
