import React from "react";

export default function Synonyms(props) {
  return (
    <div className="synonyms">
      <ul>
        {props.synonyms.map(function (synonym, index) {
          return <li key={index}>{synonym}</li>;
        })}
      </ul>
    </div>
  );
}
