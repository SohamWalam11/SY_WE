import React from 'react';

export default function BranchCard({ branch, onClick, books }) {
  // Filter books for the branch.
  const branchBooks = books.filter(book => book.branch === branch);
  const totalBooks = branchBooks.length;

  // State to track if the book list is expanded
  const [isExpanded, setIsExpanded] = React.useState(false);

  // Function to toggle the expanded state
  const toggleExpansion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="branch-card" onClick={toggleExpansion}>
      <h2>{branch}</h2>
      <p>Total Books: {totalBooks}</p>
      {isExpanded && (
        <div>
          <h3>Books:</h3>
          <ul>
            {branchBooks.map(book => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
