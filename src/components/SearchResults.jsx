import React from "react";

const SearchResults = ({ results }) => {
  if (results.length === 0) {
    return <p className="text-center mt-4">No results found.</p>;
  }

  return (
    <div className="mt-4">
      <ul>
        {results.map((result, index) => (
          <li key={index} className="border-b py-2">
            {result}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SearchResults;
