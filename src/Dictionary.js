import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./Dictionary.css";

export default function Dictionary(props) {
  const [word, setWord] = useState(props.defaultWord);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  const [photos, setPhotos] = useState(null);
  function handleResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }
  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${word}`;
    axios.get(apiUrl).then(handleResponse);
    setLoaded(true);
    let pexelsApiKey =
      "563492ad6f917000010000012b5f27fe3f2d460da94c8d887398713f";

    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=12`;
    axios
      .get(pexelsApiUrl, {
        headers: { Authorization: `Bearer ${pexelsApiKey}` },
      })
      .then(handlePexelsResponse);
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
        <Photos photos={photos} />
      </div>
    );
  } else {
    search();

    return null;
  }
}
