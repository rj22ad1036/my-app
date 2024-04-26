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
      className="flex flex-col gap-2 border-2 border-black p-2 bg-gray-200 rounded-lg  mb-4"
      href={`/manga/${id}`}
    >
      <div className="text-md  font-bold">{name}</div>

      <div className="flex justify-center">
        <Image src={image} width={200} height={300} />
      </div>
    </Link>
  );
};

export default BookCard;
