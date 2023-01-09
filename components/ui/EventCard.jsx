import React from "react";

const EventCard = ({ date, title, description }) => {
  return (
    <div className="flex gap-3 group my-8">
      <div className="border-green-500 border-l-4x bg-gray-200 group-hover:bg-[#00876C] group-hover:text-white text-center">
        <h1 className="text-5xl font-bold">
          {date.split("/")[1] + "/" + date.split("/")[2]}
        </h1>
        <h2 className="text-4xl font-semibold">{date.split("/")[0]}</h2>
      </div>
      <div>
        <h4 className="text-2xl font-semibold">{title}</h4>
        <p>{description.slice(0, 200)}</p>
      </div>
    </div>
  );
};

export default EventCard;
