"use client";
import React from "react";
import { useState, useEffect } from "react";
import { getBook } from "@/app/query/book";

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
    <div>
      <span>{JSON.stringify(book)}</span>
    </div>
  );
};

export default page;
