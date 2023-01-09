import React from "react";
import Link from "next/link";
import Wrapper from "../ui/Wrapper";

const HeroSection = () => {
  return (
    <Wrapper styles="max-w-[1920px] h-[575px] relative p-[0px]">
      <img
        className="object-fill h-full w-full"
        src="/assets/images/hero1.jpg"
        alt=""
      />
      <div className="text-white h-3/4 absolute inset-0 my-auto px-4">
        <span class="material-symbols-outlined absolute inset-y-0 left-0 my-auto h-4 text-4xl text-white">
          arrow_back_ios
        </span>
        <span class="material-symbols-outlined absolute inset-y-0 right-0 my-auto h-4 text-4xl text-white">
          arrow_forward_ios
        </span>
        <div className="flex flex-col justify-between mx-6 h-full">
          <h1 className="text-5xl font-bold border-b-2 border-green-500 py-4 w-fit pr-48 inline-block">
            Studying at KIT
          </h1>
          <p className="text-xl ">
            Research-based learning between academic tradition and cutting-edge
            research. Learn more.
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
            {[
              {
                title: "Degree program",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                title: "Reasearc-based studies",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
              {
                title: "Application",
                description:
                  "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-8 md:bg-[#00876C] p-2"
              >
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold">
                  {item.title}
                </h3>
                <p className="hidden md:flex  gap-4 items-center">
                  {item.description}{" "}
                  <span class="material-symbols-outlined">arrow_right_alt</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ul className="grid grid-cols-2 xl:flex  items-center gap-8 bg-black text-white py-8 px-4 lg:px-16">
        {[
          { title: "Young Scientist", link: "/young" },
          { title: "prospective student", link: "/young" },
        ].map((item, index) => (
          <li
            key={index}
            className="border border-white rounded-tr-lg rounded-bl-lg p-4 group"
          >
            <Link
              href={item.link}
              className="flex items-center justify-between  md:text-xl uppercase whitespace-nowrap"
            >
              {item.title}{" "}
              <span class="material-symbols-outlined hidden lg:block  group-hover:translate-x-4 duration-300 ease-in-out">
                arrow_forward
              </span>
            </Link>
          </li>
        ))}
        <li className="md:col-span-2 md:block hidden">
          <input
            className="border   w-full  border-white rounded-tr-lg rounded-bl-lg bg-transparent placeholder:text-2xl p-4"
            placeholder="SEARCH"
          />
        </li>
      </ul>
    </Wrapper>
  );
};

export default HeroSection;
