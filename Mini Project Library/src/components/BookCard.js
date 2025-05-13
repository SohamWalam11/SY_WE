import React from 'react';

const BookCard = ({ book, setIssuedBooks, setActiveSection, style, onIssuedBookClick }) => {
  const handleIssue = () => {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);

    const issuedBook = {
      ...book,
      dueDate: dueDate.toDateString(),
    };

    if (setIssuedBooks && setActiveSection) {
      setIssuedBooks(prev => {
        const alreadyIssued = prev.some(b => b.id === book.id);
        return alreadyIssued ? prev : [...prev, issuedBook];
      });
      setActiveSection("issued"); // Navigate to Issued Books after adding
    }
  };

  const cardStyle = {
    border: '1px solid #ccc',
    borderRadius: '8px',
    padding: '1rem',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    transition: 'transform 0.2s ease-in-out',
    cursor: onIssuedBookClick ? 'pointer' : 'default',
    ...style, // Apply any passed-down styles
  };

  const fileIconStyle = {
    fontSize: '2rem',
    textAlign: 'center',
    marginBottom: '0.5rem',
  };

  const bookInfoStyle = {
    flexGrow: 1,
  };

  const titleStyle = {
    fontSize: '1rem',
    margin: '0 0 0.25rem 0',
  };

  const authorStyle = {
    fontSize: '0.875rem',
    color: '#555',
    marginBottom: '0.5rem',
  };

  const dueStyle = {
    color: '#d32f2f',
  };

  const addButton = {
    backgroundColor: '#f0f0f0',
    color: '#333',
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
    alignSelf: 'flex-start',
    marginTop: '0.5rem',
  };

  const addButtonHover = {
    backgroundColor: '#ddd',
  };

  return (
    <div
      className="book-card"
      style={cardStyle}
      onClick={() => onIssuedBookClick && onIssuedBookClick(book)}
    >
      <div className="file-icon" style={fileIconStyle}>
        📘
      </div>
      <div className="book-info" style={bookInfoStyle}>
        <h3 style={titleStyle}>{book.title}</h3>
        <p style={authorStyle}>{book.author}</p>
        {book.dueDate && <p className="due" style={dueStyle}>Due: {book.dueDate}</p>}
      </div>
      {setIssuedBooks && setActiveSection && (
        <button
          className="add-button"
          style={addButton}
          onMouseOver={(e) => Object.assign(e.target.style, addButtonHover)}
          onMouseOut={(e) => Object.assign(e.target.style, addButton)}
          onClick={handleIssue} // Call handleIssue on button click
        >
          + Add
        </button>
      )}
    </div>
  );
};

export default BookCard;