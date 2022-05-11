import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      {props.phonetics.map(function(phonetic, index) {
        return (
          <div key={index}>
            <a href={phonetic.audio} target="_blank" rel="noopener noreferrer">
              Listen
            </a>{" "}
            <strong>{phonetic.text}</strong>
          </div>
        );
      })}
    </div>
  );
}
