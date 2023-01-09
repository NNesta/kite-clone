import React from "react";
import Link from "next/link";

const Card1 = ({ image, title, description }) => {
  return (
    <div className="flex p-4 relative flex-col justify-between w-full h-[550px] text-white">
      <img
        className="absolute -z-10  inset-0 h-full w-full object-cover"
        src={image}
        alt=""
      />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <div className="flex flex-col gap-6">
        <p>{description}</p>
        <Link
          href="/learn"
          className="flex p-4 text-xl self-start justify-between items-center group text-white bg-[#00876C]"
        >
          Learn more{" "}
        </Link>
      </div>
    </div>
  );
};

export default Card1;
