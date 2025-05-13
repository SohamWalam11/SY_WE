import React from 'react';

export default function SearchBar({ searchQuery, setSearchQuery }) {
  return (
    <input
      type="text"
      placeholder="Search by title or author..."
      value={searchQuery}
      onChange={(e) => setSearchQuery(e.target.value)}
      className="p-2 m-4 w-1/2 border rounded"
    />
  );
}