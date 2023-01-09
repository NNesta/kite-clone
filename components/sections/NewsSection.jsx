import React from "react";
import Wrapper from "../ui/Wrapper";
import Card from "../ui/Card";

const NewsSection = () => {
  return (
    <Wrapper styles="my-32">
      <h1 className="text-5xl font-bold">News</h1>
      <hr className="bg-[#00876C] w-32 h-1 my-4" />
      <div className="grid md:grid-cols-4 gap-6">
        {[
          {
            image:
              "https://www.kit.edu/img/20221215-TM-01-002-teaser_rdax_1024x589_98s.jpg",
            title:
              "Research in a Double Pack: Digital Technologies and Building for an Inclusive Society",
            description:
              "The KIT Institute for Technology Assessment and Systems Analysis (ITAS) and the KIT Institute for the History of Science, Technology and Medicine (IWTM) are joining forces to create a new research focus area. The aim is to develop a research agenda that will help to shape the future of digital technologies and building for an inclusive society.",
          },
          {
            image:
              "https://www.kit.edu/img/20221215-TM-01-002-teaser_rdax_1024x589_98s.jpg",
            title:
              "Research in a Double Pack: Digital Technologies and Building for an Inclusive Society",
            description:
              "The KIT Institute for Technology Assessment and Systems Analysis (ITAS) and the KIT Institute for the History of Science, Technology and Medicine (IWTM) are joining forces to create a new research focus area. The aim is to develop a research agenda that will help to shape the future of digital technologies and building for an inclusive society.",
          },
          {
            image:
              "https://www.kit.edu/img/20221215-TM-01-002-teaser_rdax_1024x589_98s.jpg",
            title:
              "Research in a Double Pack: Digital Technologies and Building for an Inclusive Society",
            description:
              "The KIT Institute for Technology Assessment and Systems Analysis (ITAS) and the KIT Institute for the History of Science, Technology and Medicine (IWTM) are joining forces to create a new research focus area. The aim is to develop a research agenda that will help to shape the future of digital technologies and building for an inclusive society.",
          },
          {
            image:
              "https://www.kit.edu/img/20221215-TM-01-002-teaser_rdax_1024x589_98s.jpg",
            title:
              "Research in a Double Pack: Digital Technologies and Building for an Inclusive Society",
            description:
              "The KIT Institute for Technology Assessment and Systems Analysis (ITAS) and the KIT Institute for the History of Science, Technology and Medicine (IWTM) are joining forces to create a new research focus area. The aim is to develop a research agenda that will help to shape the future of digital technologies and building for an inclusive society.",
          },
        ].map((item, index) => (
          <Card key={index} {...item} />
        ))}
      </div>
    </Wrapper>
  );
};

export default NewsSection;
