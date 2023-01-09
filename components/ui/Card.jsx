import React from "react";
import Link from "next/link";

const Card = ({ image, title, description }) => {
  return (
    <div className="flex flex-col gap-3">
      <img src={image} alt="" />
      <h3 className="text-2xl font-semibold">{title}</h3>
      <p>{description}</p>
      <Link
        href="/learn"
        className="flex justify-between items-center group text-[#00876C]"
      >
        Learn more{" "}
        <span class="material-symbols-outlined group-hover:translate-x-4 duration-300 ease-in-out">
          arrow_forward
        </span>
      </Link>
      <hr className="w-full h-2 bg-[#00876C]" />
    </div>
  );
};

export default Card;
