import React from "react";

const page = () => {
  return (
    <div className="absolute w-full h-full bg-[#0f091b] flex items-center justify-center p-4">
      <div className="flex flex-row justify-between items-center space-x-4">
        <img
          src="https://i.pinimg.com/736x/77/5e/64/775e6414c728a6d82cae3f8c8d93146c.jpg"
          alt="Description of image"
          className="w-64 h-auto mb-4 rounded-lg shadow-lg"
        />
        <div className="flex flex-col space-y-4 justify-center items-center">
          <h1 className="text-4xl font-bold text-white mb-4">
            Welcome to ViChron
          </h1>
          <h2 className="text-2xl font-semibold text-white mb-4">
            Where Stories Come to Life
          </h2>
          <p className="text-white text-lg w-3/4 text-center">
            A place where you can read and write stories. Explore a wide variety
            of genres and discover new worlds.
          </p>
          <p className="text-white text-lg w-3/4 text-center">
            Our comics feature captivating plots filled with twists and turns
            that will keep you on the edge of your seat. Immerse yourself in
            stunning illustrations that bring our characters and their worlds to
            life.
          </p>
          <p className="text-white text-lg w-3/4 text-center">
            From brave heroes to cunning villains, our comics showcase a diverse
            range of characters you'll love. Never miss a beat with regular
            updates and new chapters released on [schedule].
          </p>

          <p className="text-white text-lg w-3/4 text-center mb-8">
            Whether you're into romance, horror, action, or even something
            queer, you'll find something to love on ViChron.
          </p>
          <a
            href="/home"
            className="text-lg font-bold bg-white text-[#0f091b] px-6 py-3 rounded"
          >
            Start Reading
          </a>
        </div>
        <img
          src="https://i.pinimg.com/564x/55/a5/79/55a5790d78300254987881e7ff14997d.jpg"
          alt="Description of image"
          className="w-64 h-auto mb-4 rounded-lg shadow-lg"
        />
      </div>
    </div>
  );
};

export default page;
