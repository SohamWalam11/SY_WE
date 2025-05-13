export const getIssuedBooks = async () => {
  try {
    const response = await fetch('/api/issued-books'); // Replace '/api/issued-books' with your actual API endpoint
    if (!response.ok) {
      const message = `An error occurred: ${response.status}`;
      throw new Error(message);
    }
    const storedBooks = await response.json();
    return storedBooks;
  } catch (error) {
    console.error("Error fetching issued books:", error);
    return []; // Provide a safe default
  }
};

export const issueBook = async (book) => {
  try {
    const response = await fetch('/api/issue-book', { // Replace '/api/issue-book' with your actual API endpoint
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...book,
        dueDate: new Date(Date.now() + 7 * 86400000).toISOString().split("T")[0], // 7 days from now
      }),
    });

    if (!response.ok) {
      const message = `An error occurred: ${response.status}`;
      throw new Error(message);
    }

    // Optionally, you can return the updated list of issued books from the API
    // const updatedIssuedBooks = await response.json();
    // return updatedIssuedBooks;

  } catch (error) {
    console.error("Error issuing book or saving to the database:", error);
    throw error; // Re-throw the error to be caught in App.js
  }
};

export const getDueBooks = async () => {
  try {
    const response = await fetch('/api/due-books'); // Replace '/api/due-books' with your actual API endpoint
    if (!response.ok) {
      const message = `An error occurred: ${response.status}`;
      throw new Error(message);
    }
    const dueBooks = await response.json();
    return dueBooks;
  } catch (error) {
    console.error("Error fetching due books:", error);
    return [];
  }
};