import React from "react";
import "./Form.css"

export const Form = ({initialSearch, onSubmit, clear}) => {
    const inputRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputRef.current.value);
    };

    const clearSearch = () => {
        clear()
        inputRef.current.value="";
    }
    console.log(initialSearch?"Form":"Form.with.results")
    return (
        <form className={"Form"} onSubmit={handleSubmit} style={{padding: initialSearch?"20% 0":"0"}}>
            <div className="Form-search-container">
                <input
                    ref={inputRef}
                    type="search"
                    className="Form-input"
                    placeholder="Wiki Search..."
                />
                <button type="submit" className="Form-button Form-button-search">search</button>
            </div>
            <button className="Form-button Form-clear-button" onClick={clearSearch}>Clear</button>
        </form>
    );
};
