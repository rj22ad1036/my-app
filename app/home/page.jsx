"use client";
import React from "react";
import BookCard from "@/components/BookCard";
import { useState } from "react";
import { useEffect } from "react";
import { getBooks } from "../query/book";
const page = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      name: "The Great Gatsby",
      author: " F. Scott Fitzgerald",
      genre: "Fiction",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/41X5fjPQDPL._SX331_BO1,204,203,200_.jpg",
      description:
        "The Great Gatsby is a novel by American writer F. Scott Fitzgerald. Set in the Jazz Age on Long Island, the novel depicts narrator Nick Carraway's interactions with mysterious millionaire Jay Gatsby and Gatsby's obsession to reunite with his former lover, Daisy Buchanan.",
      chapter_count: 9,
    },
    {
      id: 2,
      name: "To Kill a Mockingbird",
      author: "Harper Lee",
      genre: "Fiction",
      image:
        "https://images-na.ssl-images-amazon.com/images/I/51b8D6X1NVL._SX331_BO1,204,203,200_.jpg",
      description:
        "To Kill a Mockingbird is a novel by Harper Lee published in 1960. Instantly successful, widely read in high schools and middle schools in the United States, it has become a classic of modern American literature, winning the Pulitzer Prize.",
      chapter_count: 10,
    },
  ]);
  useEffect(() => {
    getBooks().then((books) => {
      console.log(books);
      setBooks(books);
    });
  }, []);
  return <div>{JSON.stringify(books)}</div>;
};
export default page;
