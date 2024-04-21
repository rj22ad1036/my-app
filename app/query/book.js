"use client";
// Upload brand data to the database

// Function to get the user's Data by email
const getBooks = async () => {
  try {
    console.log("getting book data");

    const response = await fetch(`/api/book/fetch`, {
      method: "POST",
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
    console.error("Failed to fetch book data", error);
  }
};

export { getBooks };
