import "./App.css";
import React from "react";
import { Header } from "./wiki-search-components/header/Header";
import { Form } from "./wiki-search-components/form/Form";
import { Results } from "./wiki-search-components/results/results";

function App() {
  const [searchWord, setSearchWord] = React.useState("");
  console.log(searchWord);
  const handleSubmit = (newSearchWord) => {
    setSearchWord(newSearchWord);
  };

  return (
    <div className="App">
      <Header />
      <div className="App-content">
        <Form searchWord={searchWord} onSubmit={handleSubmit} />
        <Results searchWord={searchWord} />
      </div>
    </div>
  );
}

export default App;
