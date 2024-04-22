import React from "react";

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
    <div className="flex flex-col gap-2 bg-gray-700 p-5 rounded-lg">
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
      <img src={image} alt={name} className="h-96 w-72" />
    </div>
  );
};

export default BookCard;
