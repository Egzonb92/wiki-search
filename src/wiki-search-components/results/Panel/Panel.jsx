import React from "react";
import "./Panel.css";

export const Panel = ({ searchResult, onClick }) => {
  if (!searchResult) {
    return null;
  }

  const title = searchResult.title;
  const summary = "";
  const image = null;

  return (
    <div className="Panel" onClick={onClick}>
      <div className="Panel-content">
        <div className="Panel-text">
          <div className="Panel-text-header">{title}</div>
          <div className="Panel-text-summary">{summary}</div>
        </div>
        {image ? <img src={image.src} alt={image.alt}></img> : null}
      </div>
    </div>
  );
};
