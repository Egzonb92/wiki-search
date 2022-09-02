import "./App.css";
import React from "react";
import {Header} from "./wiki-search-components/header/Header";
import {Form} from "./wiki-search-components/form/Form";
import {Results} from "./wiki-search-components/results/results";

function App() {

    const [searchWord, setSearchWord] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(
        JSON.parse(localStorage.getItem("Wiki-Search-Results")) ?? null
    );

    const handleSubmit = (newSearchWord) => {
        setSearchWord(newSearchWord);
    };
    return (
        <div className="App">
            <Header/>
            <div className="App-content">
                <Form onSubmit={handleSubmit} clear={() => setSearchResults(null)}/>
                <Results searchWord={searchWord} searchResults={searchResults} setSearchResults={setSearchResults}/>
            </div>
        </div>
    );
}

export default App;
