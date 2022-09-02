import React from "react";
import "./Panel.css";

export const Panel = ({searchResult, onClick}) => {
    if (!searchResult) {
        return null;
    }

    const title = searchResult.title;
    const summary = searchResult.extract;
    const image = searchResult.thumbnail;


    return (
        <div className="Panel" onClick={onClick}>
            <div className="Panel-content">
                <div className="Panel-text">
                    <div className="Panel-text-header">{title}</div>
                    <div className="Panel-text-summary">{summary}</div>
                </div>
                {image ?
                    <div style={{whiteSpace: "nowrap", height: "100px", width: "100px"}}>
                        <span style={{display:"inline-block", verticalAlign:"middle", height:"100%"}}> </span>
                        <img style={{ background:"#3A6F9A", verticalAlign:"middle"}} src={image.source} alt={image.alt}></img></div>
                    : null}
            </div>
        </div>
    );
};
