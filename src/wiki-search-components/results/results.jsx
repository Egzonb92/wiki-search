import React from "react";
import { fetchWiki } from "./api/API";
import { Panel } from "./Panel/Panel";
import "./results.css";

export const Results = ({ searchWord }) => {
  const [searchResults, setSearchResults] = React.useState(
    JSON.parse(localStorage.getItem("Wiki-Search-Results")) ?? null
  );
  // const imagesPromises = [];
  // const summariesPromises = [];

  React.useEffect(() => {
    if (!searchWord) {
      return;
    }
    fetchWiki(searchWord).then((data) => {
      setSearchResults(data.query.pages);
      localStorage.setItem(
        "Wiki-Search-Results",
        JSON.stringify(data.query.pages)
      );
    });
  }, [searchWord]);

  if (!searchResults) {
    return null;
  }

  // Object.entries(searchResults).forEach((result) => {
  //   const pageid = result[1].pageid;
  //   console.log(pageid);
  //   imagesPromises.push(
  //     fetch(
  //       `http://en.wikipedia.org/w/api.php?action=query&pageids=${pageid}&prop=pageimages&format=json&pithumbsize=100`
  //     )
  //   )
  //   summariesPromises.push(
  //     fetch(
  //       `https://en.wikipedia.org/w/api.php?action=query&prop=extracts&format=json&exintro=&pageids=${pageid}`
  //     )
  //   )
  // });

  const navigateTo = (pageId) => {
    console.log(pageId);
    window.location.href = `https://en.wikipedia.org/?curid=${pageId}`;
  };
  //TODO: Fiks sortering!
  const resultsMatrix = Object.entries(searchResults);
  const resultsArray = resultsMatrix[0].map((col, i) =>
    resultsMatrix.map((row) => row[i])
  )[1];
  const resultsSorted = resultsArray.sort((a, b) => {
    return a.index < b.index;
  });

  console.log("sorted: ", resultsSorted);

  return (
    <div className="Results">
      {Object.entries(searchResults)
        .sort(function (a, b) {
          return a[1].index < b[1].index;
        })
        .map((i, j) => {
          return (
            <Panel
              onClick={() => navigateTo(i[1].pageid)}
              key={j}
              searchResult={i[1]}
            />
          );
        })}
    </div>
  );
};
