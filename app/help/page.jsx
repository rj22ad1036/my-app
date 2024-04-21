"use client";
import React, { useState } from "react";

function HelpPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [problem, setProblem] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, problem);
    setSubmitted(true);
  };

  return (
    <div className="w-full h-full flex flex-col justify-center items-center pt-10 gap-5">
      <h1 className="text-3xl font-semibold ">Need Some help??</h1>
      {submitted ? (
        <p>We will get to your problem soon</p>
      ) : (
        <form
          className="flex flex-col justify-between h-64 space-y-4"
          onSubmit={handleSubmit}
        >
          <label className="flex flex-col">
            UserName:
            <input
              className="border-black border-2 rounded-md p-1"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Email:
            <input
              className="border-black border-2 rounded-md p-1"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="flex flex-col">
            Describe your problem:
            <textarea
              className="border-black border-2 rounded-md p-1 "
              value={problem}
              onChange={(e) => setProblem(e.target.value)}
            />
          </label>
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
