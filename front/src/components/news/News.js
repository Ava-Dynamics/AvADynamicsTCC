import React from "react";

function News({ pageName, title, content, date, image }) {
  return (
    <div className="flex mt-10">
      <div className="text-zinc-500 font-light gap-2 flex flex-col max-w-lg">
        <span className="text-sm">{pageName}</span>
        <span className="text-lg text-finscoreLink font-medium">{title}</span>
        <span className="text-sm max-w-lg text-justify tracking-wide">{content}</span>
        <span className="text-sm">{date}</span>
      </div>
      <div>
        <img
        className="w-32 h-32 border rounded-lg ml-5 mt-6"
        src={image} referrerPolicy="no-referrer" alt="news" />
      </div>
    </div>
  );
}

export default News;
