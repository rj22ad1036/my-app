"use client";
import React, { useState } from "react";

function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [category, setCategory] = useState("");
  const [problem, setProblem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, category, problem);
    setSubmitted(true);
  };

  return (
    <div className="absolute w-full h-full flex flex-col pt-10 items-center gap-5 bg-[#0f091b]">
      <h1 className="text-3xl font-semibold text-white">Need Some help??</h1>
      {submitted ? (
        <p className="text-white">We will get to your problem soon</p>
      ) : (
        <form
          className="flex flex-col justify-between h-64 space-y-4"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col text-white">
            UserName:
            <input
              className="border-black border-2 rounded-md p-1 text-black"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col text-white">
            Email:
            <input
              className="border-black border-2 rounded-md p-1 text-black"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="text-white">Problem Description:</label>
          <textarea
            className="border-black border-2 rounded-md  text-black w-full h-52 p-5"
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
          />

          <label className="text-white">Category:</label>
          <input
            className="border-black border-2 rounded-md p-1 text-black"
            type="text"
            list="categories"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <datalist id="categories">
            <option value="Slow loading" />
            <option value="Content Skipping" />
            <option value="Broken Links " />
            {/* Add more options as needed */}
          </datalist>

          <button
            type="submit"
            className="bg-blue-500 text-white rounded-md border-black border-2"
          >
            Submit
          </button>
        </form>
      )}
    </div>
  );
}

export default HelpPage;
