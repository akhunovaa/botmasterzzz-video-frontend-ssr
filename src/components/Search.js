import React from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";
import useInput from "../hooks/useInput";
import "../sass/Search.css"

const Search = () => {
  const history = useHistory();
  const searchterm = useInput("");

  const handleSearch = (e) => {
    if (e.keyCode === 13) {
      if (!searchterm.value.trim()) {
        return toast.dark("Введите запрос...");
      }

      history.push(`/results/${searchterm.value}`);
      searchterm.setValue("");
    }
  };

  return (
    <div className='search-bar'>
      <input
        className="search"
        type="text"
        placeholder="Поиск"
        value={searchterm.value}
        onKeyDown={handleSearch}
        onChange={searchterm.onChange}
      />
    </div>
  );
};

export default Search;
