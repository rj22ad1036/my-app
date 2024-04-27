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
    <div className=" absolute w-full h-full flex flex-col w-full h-full items-center pt-2  bg-[#0f091b]  ">
      <div className="flex flex-wrap justify-center gap-4">
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
