import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, setIssuedBooks, setActiveSection, onBookClick }) => {
  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gap: '16px',
      padding: '16px'
    }}>
      {books.map((book, index) => {
        let cardStyle = {};
        if (index % 4 === 0) {
          cardStyle = { backgroundColor: '#f0f4c3' }; // Light yellow
        } else if (index % 4 === 1) {
          cardStyle = { backgroundColor: '#e1f5fe' }; // Light blue
        } else if (index % 4 === 2) {
          cardStyle = { backgroundColor: '#f3e5f5' }; // Light purple
        } else {
          cardStyle = { backgroundColor: '#fff9c4' }; // Light yellow
        }

        return (
          <div
            key={book.id}
            style={{
              border: '1px solid #ccc',
              borderRadius: '8px',
              padding: '8px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              cursor: 'pointer'
            }}
            onClick={() => onBookClick && onBookClick(book)}
          >
            <BookCard
              book={book}
              setIssuedBooks={setIssuedBooks}
              setActiveSection={setActiveSection}
              style={cardStyle}
            />
          </div>
        );
      })}
    </div>
  );
};

export default BookList;