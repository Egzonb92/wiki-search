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
            localStorage.setItem("Wiki-Search-Results", JSON.stringify(res))
            setSearchResults(res);
            setState(resultStates.success)


        }).catch((e) => {
            setSearchResults(null)
            if (AbortCtrl.signal.aborted) {
                setState(resultStates.initialState)
            } else {
                setState(resultStates.error)
            }
        })
        return () => AbortCtrl.abort()
    }, [searchWord, setSearchResults]);


    if (searchResults) {
        results = Array(5).fill(null)
        Object.entries(searchResults)?.forEach(
            keyVal => {
                const val = keyVal[1]
                results[val.index - 1] = val
            }
        )
    }


    return (
        <div className="Results">
            {results ? results.map((i, j) => {
                return (
                    <Panel key={j} searchResult={i}/>
                );
            }) : null}
            {state === resultStates.noResults ? <div>There were no results matching {searchWord}</div> : null}
            {state === resultStates.error ? <div>An error has accured.</div> : null}
        </div>
    );
};
