const API_URL = '/api/books';
    let books = [];

    const getBooks = () => {
      fetch(API_URL)
        .then(res => res.json())
        .then(data => {
          books = data;
          filterAndSortBooks();
        });
    };

    const renderBooks = (list) => {
      const container = document.getElementById('book-list');
      container.innerHTML = '';

      if (list.length === 0) {
        container.innerHTML = '<p style="color:white;">No books found.</p>';
        return;
      }

      list.forEach(book => {
        const div = document.createElement('div');
        div.className = 'book';
        div.innerHTML = `  
          <h2>${book.title}</h2>
          <p><strong>Author:</strong> ${book.author}</p>
          <p><strong>Year:</strong> ${book.year}</p>
          <p><strong>Genre:</strong> ${book.genre}</p>
          <button class="delete-btn" onclick="deleteBook('${book._id}')">Delete</button>
        `;
        container.appendChild(div);
      });
    };

    const filterAndSortBooks = () => {
      const searchValue = document.getElementById('searchInput').value.toLowerCase();
      const yearSort = document.getElementById('sortSelect').value;
      const genreSort = document.getElementById('genreSort')?.value;
      const titleSort = document.getElementById('titleSort')?.value;

      let filtered = books.filter(book =>
        book.title.toLowerCase().includes(searchValue) ||
        book.author.toLowerCase().includes(searchValue)
      );

      if (yearSort === 'asc') filtered.sort((a, b) => a.year - b.year);
      else if (yearSort === 'desc') filtered.sort((a, b) => b.year - a.year);

      if (genreSort === 'genreAZ') filtered.sort((a, b) => a.genre.localeCompare(b.genre));
      else if (genreSort === 'genreZA') filtered.sort((a, b) => b.genre.localeCompare(a.genre));

      if (titleSort === 'titleAZ') filtered.sort((a, b) => a.title.localeCompare(b.title));
      else if (titleSort === 'titleZA') filtered.sort((a, b) => b.title.localeCompare(a.title));

      renderBooks(filtered);
    };

    const addBook = () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const year = document.getElementById('year').value;
      const genre = document.getElementById('genre').value;

      if (!title || !author || !year || !genre) {
        alert('Please fill in all fields.');
        return;
      }

      fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, author, year, genre })
      })
      .then(res => res.json())
      .then(() => {
        getBooks();
        document.getElementById('title').value = '';
        document.getElementById('author').value = '';
        document.getElementById('year').value = '';
        document.getElementById('genre').value = '';
      });
    };

    const deleteBook = (id) => {
      fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
      }).then(() => getBooks());
    };

    const generateStars = (count) => {
      const container = document.getElementById('stars');
      for (let i = 0; i < count; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.top = Math.random() * 100 + '%';
        star.style.left = Math.random() * 100 + '%';
        star.style.animationDuration = `${1 + Math.random() * 3}s`;
        container.appendChild(star);
      }
    };

    generateStars(80);
    getBooks();