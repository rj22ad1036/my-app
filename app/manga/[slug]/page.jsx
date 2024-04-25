"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getBook } from "@/app/query/book";
import Link from "next/link";
import Image from "next/image";
const page = ({ params }) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(params.slug).then((data) => {
      setBook(data);
    });
  }, [isMounted]);

  return (
    <div className="container mx-auto px-4 py-12 md:px-6 lg:py-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <Image
            alt="Manga Cover"
            className="w-full rounded-lg object-cover"
            height="500"
            src={book.image}
            style={{
              aspectRatio: "350/500",
              objectFit: "cover",
            }}
            width="350"
          />
        </div>
        <div className="space-y-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl">
              {book.name}
            </h1>
            <p className="mt-2 text-gray-500 dark:text-gray-400">
              By {book.author}
            </p>
          </div>

          <div className="prose prose-gray max-w-none dark:prose-invert">
            <p>{book.description}</p>
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400">
              Chapters: {book.chapter_count}
            </p>
          </div>
          <div>
            {/*                       
            <Link
              className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
              href={book.link}
            >
              Read Now
            </Link> */}
            {/* if no link dont displayu */}
            {book.link && (
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-gray-900 px-6 text-sm font-medium text-gray-50 shadow transition-colors hover:bg-gray-900/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-950 disabled:pointer-events-none disabled:opacity-50 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-50/90 dark:focus-visible:ring-gray-300"
                href={book.link}
              >
                Read Now
              </Link>
            )}
          </div>
          <div>
            <p className="text-gray-500 dark:text-gray-400 mb-2">Categories:</p>
            <div className="flex flex-wrap gap-2">
              <span className="px-2 py-1 text-sm font-medium text-gray-50 bg-gray-900 rounded-md">
                {book.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
