import "./App.css";
import React from "react";
import {Header} from "./wiki-search-components/header/Header";
import {Form} from "./wiki-search-components/form/Form";
import {Results} from "./wiki-search-components/results/results";
import flie from "./flie.png"

export const Flie = () => {
    const x = Math.random()*100
    const y = Math.random()*100
    return (
        <img style={{
            width:"3rem",
            height:"2.5rem",
            objectFit: "cover",
            objectPosition:"right",
            background:"none",
            position:"absolute",
            filter: "brightness(1.75)",
            top:`${y}vh`,
            left:`${x}vw`

        }
        } src={flie}/>
    )
}


function App() {

    const [searchWord, setSearchWord] = React.useState("");
    const [searchResults, setSearchResults] = React.useState(
        JSON.parse(localStorage.getItem("Wiki-Search-Results")) ?? null
    );

    const handleSubmit = (newSearchWord) => {
        setSearchWord(newSearchWord);
    };

    const clear = () => {
        setSearchResults(null);
        setSearchWord("")
        try {
            localStorage.removeItem("Wiki-Search-Results")
        } catch (e) {

        }
    }
    return (
        <div className="App">
            <Flie/>
            <Header/>
            <Form initialSearch={!searchResults} onSubmit={handleSubmit} clear={clear}/>
            <Results searchWord={searchWord} searchResults={searchResults} setSearchResults={setSearchResults}/>
        </div>
    );
}

export default App;
