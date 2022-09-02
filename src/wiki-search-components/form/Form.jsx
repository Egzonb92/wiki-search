import React from "react";

export const Form = ({ searchWord, onSubmit }) => {
  const inputRef = React.useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(inputRef.current.value);
    console.log(inputRef.current.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        type="search"
        className=""
        placeholder="Wiki Search"
      />
      <button type="submit">search</button>
    </form>
  );
};
