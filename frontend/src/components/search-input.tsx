import React from "react";
import SearchIcon from "../icons/search";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onEnter: () => void;
  placeholder?: string;
}

const SearchInput: React.FC<SearchInputProps> = ({
  value,
  onChange,
  onEnter,
  placeholder = "Search",
}) => {
  return (
    <label className="input input-bordered flex items-center gap-2">
      <SearchIcon className="w-4 h-4 opacity-70" />
      <input
        type="text"
        className="grow"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && onEnter()}
      />
    </label>
  );
};

export default SearchInput;
