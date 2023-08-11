import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";
//<a href="https://www.freepik.com/free-photo/textured-background-white-tone_17595847.htm#page=2&query=paper&position=40&from_view=search&track=sph">Image by rawpixel.com</a> on Freepik

export default function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.defaultKeyword);
  const [results, setResults] = useState(null);
  const [loaded, setLoaded] = useState(false);
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search() {
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  function load() {
    setLoaded(true);
    search();
  }
  if (loaded) {
    return (
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit} className="searchbar">
            <input
              type="search"
              placeholder="What word do you want to look-up?"
              onChange={updateKeyword}
            />
          </form>
          <div className="hint">
            suggested words: sunrise, forest, waterfall, coffee...
          </div>
        </section>
        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "Loading...";
  }
}
