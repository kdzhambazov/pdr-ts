import React from "react";
import { useCallback, useRef } from "react";
import "./styles.css";

type Props = {
  onSearch: (value: string) => void
}

export const Search = ({ onSearch }: Props) => {
  const searchInput = useRef(null);

  const searchHanlder = () => {
    if (onSearch && searchInput) onSearch(searchInput?.current?.value);
  };

  const debouncedSearchHanlder = useCallback(searchHanlder, []);

  return (
    <div className="searchContainer">
      <input
        className="search"
        placeholder="search"
        ref={searchInput}
        onChange={debouncedSearchHanlder}
      />
      <button className="searchButton" />
    </div>
  );
};

export default Search;
