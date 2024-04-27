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
    <div className="flex flex-col items-center  bg-[#af94e8]">
      {/* button and inputs */}
      <button
        onClick={handleClick}
        className="mb-4 bg-blue-500 rounded-md border-2 border-black p-2 hover:bg-blue-700 hover:text-white"
      >
        Create Book
      </button>
      <input
        type="text"
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="id"
        onChange={(e) => setId(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="image"
        onChange={(e) => setImage(e.target.value)}
        className="border-2 border-black mb-4 rounded-md  p-2"
      />
      <input
        type="text"
        placeholder="description"
        onChange={(e) => setDescription(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="author"
        onChange={(e) => setAuthor(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="link"
        onChange={(e) => setLink(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="category"
        onChange={(e) => setCategory(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
      <input
        type="text"
        placeholder="chapter_count"
        onChange={(e) => setChapter_count(e.target.value)}
        className="border-2 border-black mb-4 rounded-md p-2"
      />
    </div>
  );
};

export default page;
