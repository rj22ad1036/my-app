"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getBook = async (id) => {
  try {
    console.log("fetching books");
    const response = await fetch(`/api/book/fetch`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Failed to fetch books", error);
  }
};
// create book
const createBook = async (
  name,
  id,
  image,
  description,
  author,
  link,
  category,
  chapter_count
) => {
  try {
    // console.log(
    //   "creating book",
    //   name,
    //   id,
    //   image,
    //   description,
    //   author,
    //   link,
    //   category,
    //   chapter_count
    // );

    const response = await fetch(`/api/book/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        id,
        image,
        description,
        author,
        link,
        category,
        chapter_count,
      }),
    });
    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const newBook = await response.json();
    return newBook;
  } catch (error) {
    console.error("Failed to create book", error);
  }
};

// fetch books api/books/home
const getBooks = async () => {
  try {
    console.log("fetching books");
    const response = await fetch(`/api/book/home`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Something went wrong");
    }
    const books = await response.json();
    return books;
  } catch (error) {
    console.error("Failed to fetch books", error);
  }
};

export { getBook, getBooks, createBook };
