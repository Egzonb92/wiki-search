import React from "react";
import "./Form.css"

export const Form = ({onSubmit, clear}) => {
    const inputRef = React.useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(inputRef.current.value);
    };

    return (
        <form className={"Form"} onSubmit={handleSubmit}>
            <div className="innerForm">
                <input
                    ref={inputRef}
                    type="search"
                    className="Form-input"
                    placeholder="Wiki Search..."
                />
                <button type="submit" className="Form-button Form-button-search">search</button>
            </div>
            <button className="Form-button Form-clear-button" onClick={clear}>Clear</button>
        </form>
    );
};
