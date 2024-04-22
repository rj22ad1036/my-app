import React from "react";

const page = () => {
  return (
    <div className="w-full h-full flex items-center justify-center h-screen bg-gray-500">
      <div className="flex flex-col justify-center items-center gap-2 h-full">
        <div className="text-3xl text-white font-bold flex-grow ">About Us</div>
        <div className="p-3 text-white flex-grow text-xl pl-10 pr-10  font-semibold">
          ViChron is a site created by fans, for fans. Though millions of users
          a month use the site, we're staffed by only a small team of volunteers
          including the founder, developers, and content moderators. If you're
          interested in contributing, check out how to support the site. For
          help with questions or suggestions about content on the site (such as
          anime, manga, or people) you can get in touch with the correct set of
          moderators (see below).
        </div>
        <div className="flex flex-col gap-2 text-white flex-grow ">
          <span className="text-2xl font-bold">Team</span>
          <span className="text-xl font-semibold">Founder: Rohan Joshi</span>
          <span className="text-xl font-semibold">
            Co-Founder: Om Dhamdhere
          </span>
        </div>
      </div>
    </div>
  );
};

export default page;
