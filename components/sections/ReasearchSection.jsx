import React from "react";
import Wrapper from "../ui/Wrapper";

const ReasearchSection = () => {
  return (
    <Wrapper>
      <div className="grid md:grid-cols-2 gap-6 items-start">
        <div className="bg-[#00876C] text-white p-4 rounded-bl-xl rounded-tr-xl flex flex-col gap-8">
          <h1 className="text-5xl font-bold">Excellency</h1>
          <p>
            As a University of Excellence, KIT strengthens excellent research,
            maintains intensive dialog with society, and offers reliable career
            paths.
          </p>
        </div>
        <div className="bg-[#00876C] text-white p-4 rounded-bl-xl rounded-tr-xl flex flex-col gap-8">
          <h1 className="text-5xl font-bold">
            Research University in the Helmholtz Association
          </h1>
          <p>
            KIT is the only German university of excellence that combines a long
            university tradition with large-scale national research.
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

export default ReasearchSection;
