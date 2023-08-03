import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [keyword, setKeyword] = useState(``);
  function handleResponse(response) {
    console.log(response.data);
  }
  function search(event) {
    event.preventDefault();

    const apiKey = `94413t4dbc141o4dc71ce00caf84f31e`;
    const apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }
  function updateKeyword(event) {
    setKeyword(event.target.value);
  }
  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input type="search" onChange={updateKeyword} />
      </form>
    </div>
  );
}
