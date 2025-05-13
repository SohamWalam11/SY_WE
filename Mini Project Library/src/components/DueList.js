import React, { useEffect, useState } from 'react';
import { getDueBooks } from '../utils/storage';

export default function NavBar() {
  const [dueCount, setDueCount] = useState(0);
  const [error, setError] = useState(null);

  useEffect(() => {
    try {
      const books = getDueBooks();
      setDueCount(books.length);
    } catch (err) {
      console.error("Error fetching due books:", err);
      setError("Failed to fetch due books.");
      setDueCount(0);
    }
  }, []);

  const handleClick = () => {
    // Handle the click, e.g., navigate to the due books section
    console.log("Navigating to due books section...");
    // You might use a routing library like React Router to do this.
  };

  return (
    <nav className="bg-gray-800 text-white flex justify-between items-center p-4">
      <div className="text-2xl font-semibold">📘 Library System</div>
      <div className="flex items-center space-x-4" onClick={handleClick}>
        <span className="mr-2 cursor-pointer">📅 Due Books</span>
        {dueCount > 0 && (
          <span className="absolute -top-2 -right-4 bg-red-500 text-white text-xs font-bold rounded-full px-2">
            {dueCount}
          </span>
        )}
      </div>
      {error && <p className="error-message">{error}</p>}
    </nav>
  );
}
