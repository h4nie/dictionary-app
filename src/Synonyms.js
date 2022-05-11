import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  return (
    <div className="Synonyms">
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
}
