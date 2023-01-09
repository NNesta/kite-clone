import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { ImInstagram, ImFacebook2, ImYoutube } from "react-icons/im";
import { AiFillTwitterSquare } from "react-icons/ai";
import { BsFillRssFill } from "react-icons/bs";
const Footer = () => {
  return (
    <div className="bg-gray-100">
      <Wrapper>
        <div className="grid md:grid-cols-4 gap-4">
          {[
            {
              title: "Visiting",
              links: [
                { title: "How to reach the KIT", link: "how" },
                { title: "Campus Map", link: "campus" },
                { title: "Events", link: "events" },
                { title: "KITShop", link: "kitshop" },
              ],
            },
            {
              title: "Applying",
              links: [
                { title: "Jobs", link: "jobs" },
                { title: "Study Courses", link: "study" },
                { title: "Trainee Positions", link: "trainee" },
                { title: "PhD Programs", link: "phd" },
              ],
            },
            {
              title: "Media",
              links: [
                { title: "Press Releases", link: "press" },
                {
                  title: "Contact for the Media",
                  link: "contact",
                },
              ],
            },
          ].map((item, index) => (
            <div key={index} className="flex flex-col ">
              <h2 className="text-2xl font-semibold">{item.title}</h2>
              <hr className="bg-[#00876C] h-2 w-24" />
              {item.links.map((item, index) => (
                <Link
                  className="text-[#00876C] border-b py-2"
                  key={index}
                  href={item.link}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          ))}
          <div className="flex flex-col ">
            <h2 className="text-2xl font-semibold">Contact</h2>
            <hr className="bg-[#00876C] h-2 w-24" />
            <p>
              Karlsruhe Institute of Technology Phone: +49 721 608-0 Fax: +49
              721 608-44290
            </p>
            <span className="flex items-center gap-2 my-2">
              Email:
              <p className="text-[#00876C]">
                info∂kit edu Staff Search Address
              </p>
            </span>
            <div className="flex items-center gap-4 text-3xl my-4">
              <ImInstagram />
              <ImFacebook2 />
              <AiFillTwitterSquare />
              <ImYoutube />
              <BsFillRssFill />
            </div>
          </div>
        </div>
        <div className="mt-4">
          <p>Credits cover image:</p>
          <p>
            Well Advised – Also in Times of Crisis - DBT/Florian
            Gaertner/phototek
          </p>
          <p>Studying at KIT - KIT</p>
        </div>
      </Wrapper>
      <div className="bg-gray-700">
        <Wrapper styles="text-white flex flex-col md:flex-row justify-between items-center">
          <div className="">
            KIT – The Research University in the Helmholtz Association
          </div>
          <ul className="flex gap-4 items-center">
            {[
              { title: "Home", link: "home" },
              { title: "Plain", link: "plain" },
              { title: "Language", link: "language" },
              { title: "Legals", link: "legals" },
              { title: "Privacy", link: "privacy" },
              { title: "Policy", link: "policy" },
              { title: "Accessibility", link: "accessibility" },
              { title: "Sitemap", link: "sitemap" },
              { title: "Intranet", link: "intranet" },
              { title: "KIT", link: "kit" },
            ].map((item, index) => (
              <li key={index}>
                <Link href={item.link}> {item.title}</Link>
              </li>
            ))}
          </ul>
        </Wrapper>
      </div>
    </div>
  );
};

export default Footer;
