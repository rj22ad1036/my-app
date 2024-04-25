"use client";
import React, { useState, useEffect } from "react";
import { getBooks, getBook } from "../query/book";
import BookCard from "@/components/BookCard";

const page = () => {
  const [books, setBooks] = useState([]);
  const [book, setBook] = useState({});
  useEffect(() => {
    getBooks().then((data) => {
      setBooks(data);
    });
  }, []);
  const [bookId, setBookId] = useState("");
  const handleClick = async () => {
    const data = await getBook(bookId);
    setBook(data);
  };
  return (
    <div className="flex flex-col w-full h-full">
      <div className="text-2xl">Books</div>
      <div className="flex flex-wrap">
        {books.map((book) => (
          <BookCard
            key={book.id}
            name={book.name}
            author={book.author}
            chapter_count={book.chapter_count}
            description={book.description}
            image={book.image}
            link={book.link}
            category={book.category}
            id={book.id}
          />
        ))}
      </div>
    </div>
  );
};

export default page;
