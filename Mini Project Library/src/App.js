// import React, { useState, useEffect } from 'react';

// import booksData from './data/booksData';

// import BookList from './components/BookList';

// import SearchBar from './components/SearchBar';

// import DueList from './components/DueList';

// import BranchCard from './components/BranchCard';

// import './App.css';

// import BookCard from './components/BookCard';

// function App() {

//   const [searchQuery, setSearchQuery] = useState('');

//   const [darkMode, setDarkMode] = useState(false);

//   const [activeSection, setActiveSection] = useState('home');

//   const [issuedBooks, setIssuedBooks] = useState(() => {

//     const storedBooks = localStorage.getItem('issuedBooks');

//     return storedBooks ? JSON.parse(storedBooks) : [];

//   });

//   const [selectedBranch, setSelectedBranch] = useState(null);



//   useEffect(() => {

//     localStorage.setItem('issuedBooks', JSON.stringify(issuedBooks));

//   }, [issuedBooks]);



//   const filteredBooks = booksData.filter(

//     (book) =>

//       book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||

//       book.author.toLowerCase().includes(searchQuery.toLowerCase())

//   );



//   const handleBranchClick = (branch) => {

//     setSelectedBranch(branch);

//     setActiveSection('books');

//   };



//   const handleIssueBook = (book) => {

//     const dueDate = new Date();

//     dueDate.setDate(dueDate.getDate() + 7); // 7 days from now



//     const issuedBook = {

//       ...book,

//       dueDate: dueDate.toDateString(),

//     };



//     // Check if the book is already issued

//     const alreadyIssued = issuedBooks.some((issued) => issued.id === book.id);

//     if (!alreadyIssued) {

//       setIssuedBooks((prev) => [...prev, issuedBook]);

//       // DO NOT change the activeSection here:

//       // setActiveSection('issued');

//     } else {

//       alert('Book already issued!');

//     }

//   };



//   const renderContent = () => {

//     switch (activeSection) {

//       case 'home':

//         return (

//           <>

//             <h1>Welcome to Library Manager</h1>

//             <p>Search and manage books in a modern layout.</p>

//             <BookList

//               books={filteredBooks}

//               setIssuedBooks={handleIssueBook}

//               setActiveSection={setActiveSection}

//             />

//           </>

//         );

//       case 'books':

//         return (

//           <BookList

//             books={

//               selectedBranch

//                 ? filteredBooks.filter((book) => book.branch === selectedBranch)

//                 : filteredBooks

//             }

//             setIssuedBooks={handleIssueBook}

//             setActiveSection={setActiveSection}

//           />

//         );

//       case 'due':

//         return <DueList />;

//       case 'issued':

//         return (

//           <div>

//             <h2>Issued Books</h2>

//             {issuedBooks.length > 0 ? (

//               <div className="book-grid">

//                 {issuedBooks.map((book) => (

//                   <BookCard key={book.id} book={book} />

//                 ))}

//               </div>

//             ) : (

//               <p>No books have been issued.</p>

//             )}

//           </div>

//         );

//       case 'branches':

//         return (

//           <div className="branch-grid">

//             <BranchCard

//               branch="COMPS"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-comps"

//             />

//             <BranchCard

//               branch="IT"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-it"

//             />

//             <BranchCard

//               branch="CSE-DS"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-cse-ds"

//             />

//             <BranchCard

//               branch="AI-DS"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-ai-ds"

//             />

//             <BranchCard

//               branch="AI-ML"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-ai-ml"

//             />

//             <BranchCard

//               branch="EXTC"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-extc"

//             />

//             <BranchCard

//               branch="MECH"

//               onClick={handleBranchClick}

//               className="branch-card branch-card-mech"

//             />

//           </div>

//         );

//       default:

//         return <p>Select a section</p>;

//     }

//   };



//   return (

//     <div className={darkMode ? 'dark' : 'light'}>

//       {/* Navbar */}

//       <div className="navbar">

//         <div className="logo">📚 Library-Manager</div>

//         <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

//         <button className="toggle-btn" onClick={() => setDarkMode(!darkMode)}>

//           {darkMode ? '☀️ Light' : '🌙 Dark'}

//         </button>

//       </div>



//       {/* Sidebar */}

//       <div className="sidebar">

//         <div

//           className={`item ${activeSection === 'home' ? 'active' : ''}`}

//           onClick={() => setActiveSection('home')}

//         >

//           🏠 Home

//         </div>

//         <div

//           className={`item ${activeSection === 'books' ? 'active' : ''}`}

//           onClick={() => setActiveSection('books')}

//         >

//           📁 Books

//         </div>

//         <div

//           className={`item ${activeSection === 'due' ? 'active' : ''}`}

//           onClick={() => setActiveSection('due')}

//         >

//           💻 Due Books

//         </div>

//         <div

//           className={`item ${activeSection === 'issued' ? 'active' : ''}`}

//           onClick={() => setActiveSection('issued')}

//         >

//           👥 Issued Books

//         </div>

//         <div

//           className={`item ${activeSection === 'recent' ? 'active' : ''}`}

//           onClick={() => setActiveSection('recent')}

//         >

//           🕘 Recent

//         </div>

//         <div

//           className={`item ${activeSection === 'branches' ? 'active' : ''}`}

//           onClick={() => setActiveSection('branches')}

//         >

//           ⭐ Branches

//         </div>

//         <div

//           className={`item ${activeSection === 'authors' ? 'active' : ''}`}

//           onClick={() => setActiveSection('authors')}

//         >

//           🚫 Authors

//         </div>

//         <div

//           className={`item ${activeSection === 'elibrary' ? 'active' : ''}`}

//           onClick={() => setActiveSection('elibrary')}

//         >

//           🗑️ E-Library

//         </div>

//         <div

//           className={`item ${activeSection === 'storage' ? 'active' : ''}`}

//           onClick={() => setActiveSection('storage')}

//         >

//           ☁️ Storage

//         </div>

//       </div>



//       {/* Main Content */}

//       <div className="main-content">

//         {activeSection === 'branches' ? (

//           renderContent()

//         ) : (

//           <BookList

//             books={selectedBranch ? filteredBooks : filteredBooks} //Condense the booksToDisplay variable into the BookList books prop

//             setIssuedBooks={handleIssueBook}

//             setActiveSection={setActiveSection}

//           />

//         )}

//       </div>

//     </div>

//   );

// }



// export default App;
import React, { useState, useEffect } from 'react';
import booksData from './data/booksData';
import BookList from './components/BookList';
import SearchBar from './components/SearchBar';
import DueList from './components/DueList';
import BranchCard from './components/BranchCard';
import './App.css';
import BookCard from './components/BookCard';

function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [darkMode, setDarkMode] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [issuedBooks, setIssuedBooks] = useState(() => {
    const storedBooks = localStorage.getItem('issuedBooks');
    return storedBooks ? JSON.parse(storedBooks) : [];
  });
  const [selectedBranch, setSelectedBranch] = useState(null);
  const [selectedIssuedBook, setSelectedIssuedBook] = useState(null); // State for clicked issued book

  useEffect(() => {
    localStorage.setItem('issuedBooks', JSON.stringify(issuedBooks));
  }, [issuedBooks]);

  const filteredBooks = booksData.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleBranchClick = (branch) => {
    setSelectedBranch(branch);
    setActiveSection('books');
  };

  // handleIssueBook is now only responsible for updating the state
  const handleIssueBook = (book) => {
    const dueDate = new Date();
    dueDate.setDate(dueDate.getDate() + 7);
    const issuedBook = {
      ...book,
      dueDate: dueDate.toDateString(),
    };
    const alreadyIssued = issuedBooks.some((issued) => issued.id === book.id);
    if (!alreadyIssued) {
      setIssuedBooks((prev) => [...prev, issuedBook]);
    } else {
      alert('Book already issued!');
    }
  };

  const handleIssuedBookClick = (book) => {
    setSelectedIssuedBook(book);
    console.log('Clicked issued book:', book);
    // Here you can implement further actions, like showing details in a modal
  };

  const renderIssuedBooks = () => {
    return (
      <div>
        <h2>Issued Books</h2>
        {issuedBooks.length > 0 ? (
          <div className="book-grid">
            {issuedBooks.map((book) => (
              <BookCard
                key={book.id}
                book={book}
                onIssuedBookClick={handleIssuedBookClick}
                // setIssuedBooks and setActiveSection are not needed here
              />
            ))}
          </div>
        ) : (
          <p>No books have been issued.</p>
        )}
        {selectedIssuedBook && (
          <div className="modal">
            <h3>Details for Issued Book</h3>
            <p>Title: {selectedIssuedBook.title}</p>
            <p>Author: {selectedIssuedBook.author}</p>
            <p>Due Date: {selectedIssuedBook.dueDate}</p>
            <button onClick={() => setSelectedIssuedBook(null)}>Close</button>
          </div>
        )}
      </div>
    );
  };

  const renderContent = () => {
    switch (activeSection) {
      case 'home':
        return (
          <>
            <h1>Welcome to Library Manager</h1>
            <p>Search and manage books in a modern layout.</p>
            <BookList
              books={filteredBooks}
              setIssuedBooks={handleIssueBook}
              setActiveSection={setActiveSection}
            />
          </>
        );
      case 'books':
        return (
          <BookList
            books={
              selectedBranch
                ? filteredBooks.filter((book) => book.branch === selectedBranch)
                : filteredBooks
            }
            setIssuedBooks={handleIssueBook}
            setActiveSection={setActiveSection}
          />
        );
      case 'due':
        return <DueList />;
      case 'issued':
        return renderIssuedBooks();
      case 'branches':
        return (
          <div className="branch-grid">
            <BranchCard
              branch="COMPS"
              onClick={() => handleBranchClick('COMPS')}
              className="branch-card branch-card-comps"
            />
            <BranchCard
              branch="IT"
              onClick={() => handleBranchClick('IT')}
              className="branch-card branch-card-it"
            />
            <BranchCard
              branch="CSE-DS"
              onClick={() => handleBranchClick('CSE-DS')}
              className="branch-card branch-card-cse-ds"
            />
            <BranchCard
              branch="AI-DS"
              onClick={() => handleBranchClick('AI-DS')}
              className="branch-card branch-card-ai-ds"
            />
            <BranchCard
              branch="AI-ML"
              onClick={() => handleBranchClick('AI-ML')}
              className="branch-card branch-card-ai-ml"
            />
            <BranchCard
              branch="EXTC"
              onClick={() => handleBranchClick('EXTC')}
              className="branch-card branch-card-extc"
            />
            <BranchCard
              branch="MECH"
              onClick={() => handleBranchClick('MECH')}
              className="branch-card branch-card-mech"
            />
          </div>
        );
      default:
        return <p>Select a section</p>;
    }
  };

  return (
    <div className={darkMode ? 'dark' : 'light'}>
      {/* Navbar */}
      <div className="navbar">
        <div className="logo" onClick={() => setActiveSection('home')}>
          📚 Library-Manager
        </div>
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <button
          className="toggle-btn"
          onClick={() => setDarkMode(!darkMode)}
        >
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </div>
      {/* Sidebar */}
      <div className="sidebar">
        <div
          className={`item ${activeSection === 'home' ? 'active' : ''}`}
          onClick={() => setActiveSection('home')}
        >
          🏠 Home
        </div>
        <div
          className={`item ${activeSection === 'books' ? 'active' : ''}`}
          onClick={() => setActiveSection('books')}
        >
          📁 Books
        </div>
        <div
          className={`item ${activeSection === 'due' ? 'active' : ''}`}
          onClick={() => setActiveSection('due')}
        >
          💻 Due Books
        </div>
        <div
          className={`item ${activeSection === 'issued' ? 'active' : ''}`}
          onClick={() => setActiveSection('issued')}
        >
          👥 Issued Books ({issuedBooks.length})
        </div>
        <div
          className={`item ${activeSection === 'recent' ? 'active' : ''}`}
          onClick={() => setActiveSection('recent')}
        >
          🕘 Recent
        </div>
        <div
          className={`item ${activeSection === 'branches' ? 'active' : ''}`}
          onClick={() => setActiveSection('branches')}
        >
          ⭐ Branches
        </div>
        <div
          className={`item ${activeSection === 'authors' ? 'active' : ''}`}
          onClick={() => setActiveSection('authors')}
        >
          🚫 Authors
        </div>
        <div
          className={`item ${activeSection === 'elibrary' ? 'active' : ''}`}
          onClick={() => setActiveSection('elibrary')}
        >
          🗑️ E-Library
        </div>
        <div
          className={`item ${activeSection === 'storage' ? 'active' : ''}`}
          onClick={() => setActiveSection('storage')}
        >
          ☁️ Storage
        </div>
      </div>
      {/* Main Content */}
      <div className="main-content">
        {renderContent()}
      </div>
    </div>
  );
}

export default App;