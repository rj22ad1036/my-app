"use client";
import React, { useState, useEffect } from "react";
import { createBook } from "../query/book";
const page = () => {
  //  name,
  // id,
  // image,
  // description,
  // author,
  // link,
  // category,
  // chapter_count
  const [name, setName] = useState("");
  const [id, setId] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [author, setAuthor] = useState("");
  const [link, setLink] = useState("");
  const [category, setCategory] = useState("");
  const [chapter_count, setChapter_count] = useState("");

  const handleClick = async () => {
    await createBook(
      name,
      id,
      image,
      description,
      author,
      link,
      category,
      chapter_count
    );
  };

  return (
    <div>
      {/* button and inputs */}
      <button onClick={handleClick}>Create Book</button>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="text"
        placeholder="author"
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="text"
        placeholder="link"
        onChange={(e) => setLink(e.target.value)}
      />
      <input
        type="text"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
      />
      <input
        type="text"
        placeholder="chapter_count"
        onChange={(e) => setChapter_count(e.target.value)}
      />
    </div>
  );
};

export default page;
