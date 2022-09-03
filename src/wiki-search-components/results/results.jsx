import React from "react";
import {fetchWiki} from "./api/API";
import {Panel} from "./Panel/Panel";
import "./results.css";


export const Results = ({searchWord, searchResults, setSearchResults}) => {
    const results = Array(5).fill(null)

    React.useEffect(() => {
        if (!searchWord) {
            return;
        }
        const [response, AbortCtrl] = fetchWiki(searchWord)
        response.then((data) => {
            if (!data) return <div>No data found</div>
            setSearchResults(data);
            localStorage.setItem(
                "Wiki-Search-Results",
                JSON.stringify(data)
            );
        }).catch((e) => {
            return <div> No data found </div>
        })
        return () => AbortCtrl.abort()
    }, [searchWord, setSearchResults]);

    if (!searchResults) {
        return null;
    }

    Object.entries(searchResults).forEach(
        keyVal => {
            const val = keyVal[1]
            results[val.index - 1] = val
        }
    )

    const navigateTo = (pageId) => {
        window.location.href = `https://en.wikipedia.org/?curid=${pageId}`;
    };

    return (
        <div className="Results">
            {results.map((i, j) => {
                return (
                    <Panel
                        key={j}
                        onClick={() => navigateTo(i.pageid)}
                        searchResult={i}
                    />
                );
            })}
        </div>
    );
};
