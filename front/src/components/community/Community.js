import React from "react";

function Community({ username, time, content, image }) {
  return (
    <div className="bg-white shadow-lg p-3 mt-10 rounded-md flex max-w-md min-h-36">
      <img src={image} className="w-10 h-10 rounded-full" alt="userprofile" />
      <div className="ml-5 flex-1">
        <div className="flex justify-between items-center text-zinc-500">
          <span className="text-lg text-black">{username}</span>
          <span className="text-sm font-light">{time}</span>
        </div>
        <div className="mt-2">
          <span className="text-sm max-w-lg font-light text-justify tracking-wide text-black">
            {content}
          </span>
        </div>
      </div>
    </div>
  );
}

export default Community;
