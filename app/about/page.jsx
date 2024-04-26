import React from "react";

const page = () => {
  return (
    <div className="absolute top-14 left-0 right-0 bottom-0 flex items-center justify-center bg-gray-500 p-10 sm:p-5  min-w-fit">
      <div className="flex flex-col justify-center items-center gap-6 bg-gray-700 p-10 rounded-lg sm:gap-4 sm:p-5 min-h-fit">
        <div className="text-3xl text-white font-bold sm:text-2xl">
          About Us
        </div>
        <div className="p-3 text-white text-xl font-semibold sm:text-lg">
          ViChron is a site created by fans, for fans. Though millions of users
          a month use the site, we're staffed by only a small team of volunteers
          including the founder, developers, and content moderators. If you're
          interested in contributing, check out how to support the site. For
          help with questions or suggestions about content on the site (such as
          anime, manga, or people) you can get in touch with the correct set of
          moderators (see below).
        </div>
        <div className="flex flex-col gap-2 text-white sm:gap-1">
          <span className="text-2xl font-bold sm:text-xl">Team</span>
          <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
            <div className="w-32 h-32 bg-white rounded-full sm:w-24 sm:h-24"></div>
            <span className="text-xl font-semibold sm:text-lg">
              Founder: Rohan Joshi
            </span>
          </div>
          <div className="flex items-center gap-4 sm:flex-col sm:items-start sm:gap-2">
            <div className="w-32 h-32 bg-white rounded-full sm:w-24 sm:h-24"></div>
            <span className="text-xl font-semibold sm:text-lg">
              Co-Founder: Om Dhamdhere
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
