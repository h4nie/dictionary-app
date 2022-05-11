import React from "react";
import "./Definitions.css";

export default function Definitions(props) {
  props.definitions;
  return (
    <div className="Definitions">
      {props.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="definition">{definition.definition}</div>
            <em className="example">{definition.example}</em>
          </div>
        );
      })}
    </div>
  );
}
