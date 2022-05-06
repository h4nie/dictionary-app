import React from "react";

export default function Definitions(props) {
  console.log(props.definitions);
  return (
    <div className="Definitions">
      {props.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <strong>{index + 1}.</strong>
            {definition.definition}
            <br />
            <br />
          </div>
        );
      })}
    </div>
  );
}
