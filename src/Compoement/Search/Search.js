import React, { useEffect, useState } from "react";
import ShowSearch from "../ShowSearch/ShowSearch";
import "../Allcss/Allcss.css";

const Search = () => {
  //data load
  const [searchs, setSearches] = useState([]);
  //input text
  const [searchText, setSearchText] = useState("");
  //result
  const [searchResult, setSearchResult] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        setSearches(data);
      });
  }, []);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => {
        const match = data.filter((find) => find.title.includes(searchText));
        setSearchResult(match);
      });
  }, [searchText]);

  const clickHandleAdd = (event) => {
    setSearchText(event.target.value);
  };

  return (
    <div>
      <div>
        <input onChange={clickHandleAdd} type="text" />
      </div>
      <div className="search_area">
        {searchResult.map((search) => (
          <ShowSearch key={search._id} search={search}></ShowSearch>
        ))}
      </div>
    </div>
  );
};

export default Search;
