"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
const BookCard = ({
  name,
  id,
  author,
  genre,
  image,
  description,
  link,
  category,
  chapter_count,
}) => {
  return (
    <Link
      className="flex flex-col gap-2 bg-gray-700 p-5 rounded-lg"
      href={`/manga/${id}`}
    >
      <div className="text-2xl text-white font-bold">{name}</div>
      <div className="text-xl text-white font-semibold">Author: {author}</div>
      <div className="text-xl text-white font-semibold">Genre: {genre}</div>
      <div className="text-xl text-white font-semibold">
        Chapter Count: {chapter_count}
      </div>
      <div className="text-xl text-white font-semibold">
        Description: {description}
      </div>
      <div className="text-xl text-white font-semibold">Link: {link}</div>
      <div className="text-xl text-white font-semibold">
        Category: {category}
      </div>
      <div className="flex justify-center">
        <Image src={image} width={200} height={300} />
      </div>
    </Link>
  );
};

export default BookCard;
