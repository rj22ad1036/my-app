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
    <div className="absolute w-full h-full flex flex-row justify-between items-center bg-gray-200 p-4">
      <img
        src="https://i.pinimg.com/736x/5c/fa/f8/5cfaf8bb9b2a7922a77b83f17cc5c39c.jpg"
        alt="Description of image"
        className="w-1/4 h-auto mb-4 rounded-lg shadow-xl "
      />
      <div className="flex flex-col justify-center items-center">
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
      <img
        src="https://i.pinimg.com/736x/03/97/b0/0397b019495c3f8c43f7b982692eb772.jpg"
        alt="Description of image"
        className="w-1/4 h-auto mb-4 rounded-xl shadow-lg  "
      />
    </div>
  );
};

export default page;
