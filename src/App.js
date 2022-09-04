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

    const clear  = () => {
        setSearchResults(null);
        setSearchWord("")
        try{localStorage.removeItem("Wiki-Search-Results")}
        catch (e){

        }


    }
    return (
        <div className="App">
            <Header/>
                <Form initialSearch={!searchResults} onSubmit={handleSubmit} clear={clear}/>
                <Results searchWord={searchWord} searchResults={searchResults} setSearchResults={setSearchResults}/>
        </div>
    );
}

export default App;
