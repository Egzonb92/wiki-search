import React from "react";
import {fetchWiki} from "./api/API";
import {Panel} from "./Panel/Panel";
import "./results.css";



const resultStates = {
    initialState: "initialState",
    success: "success",
    noResults: "noResults",
    error: "error",
}

export const Results = ({searchWord, searchResults, setSearchResults}) => {
    let results = null
    const [state, setState] = React.useState(resultStates.initialState)

    React.useEffect(() => {
        setState(null)
        if (!searchWord) {
            return;
        }
        const [response, AbortCtrl] = fetchWiki(searchWord)
        response.then((data) => {
            if (!data.query) {
                setSearchResults(null)
                setState(resultStates.noResults)
                return
            }
            const res = data.query.pages;
            setSearchResults(res);
            setState(resultStates.success)


        }).catch((e) => {
            console.log("hey", e)
            console.log(AbortCtrl.signal)
            setSearchResults(null)
            setState(resultStates.error)
        })
        return () => AbortCtrl.abort()
    }, [searchWord, setSearchResults]);



    if (searchResults){
        results = Array(5).fill(null)
        Object.entries(searchResults)?.forEach(
            keyVal => {
                const val = keyVal[1]
                results[val.index - 1] = val
            }
        )
    }

    console.log(state, "hey")

    return (
        <div className="Results">
            {results?results.map((i, j) => {
                return (
                    <Panel
                        key={j}
                        onClick={() => window.location.href = `https://en.wikipedia.org/?curid=${i.pageid}`}
                        searchResult={i}
                    />
                );
            }):null}
            {state===resultStates.noResults?<div>There were no results matching {searchWord}</div>:null}
            {state===resultStates.error?<div>An error has accured.</div>:null}
        </div>
    );
};
