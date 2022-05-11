import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleWord(event) {
    setWord(event.target.value);
  }

  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <h4>What word do you want to look up?</h4>
          <form onSubmit={handleSubmit}>
            <input
              type="search"
              onChange={handleWord}
              defaultValue={props.defaultWord}
            />
          </form>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    search();
    setLoaded(true);
  }
}
