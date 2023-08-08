import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(``);
  const [results, setResults] = useState(null);
  function handleResponse(response) {
    console.log(response.data);
    setResults(response.data);
  }
  function search(event) {
    event.preventDefault();
    // documentation: https://www.shecodes.io/learn/apis/dictionary
    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <section>
        <form onSubmit={search} className="searchbar">
          <input type="search" onChange={updateKeyword} />
        </form>
      </section>
      <Results results={results} />
    </div>
  );
}
