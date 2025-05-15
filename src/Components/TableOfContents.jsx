import React from "react";
import Slider from "./Slider";

const TableOfContents = () => {
  return (
    <div className="my-12">
      <div className="text-center">
        <button className="text-2xl text-[#7627b2] font-semibold bg-gradient-to-r from-[#ffceff] via-[#f3e5ff] to-[#f3e5ff] py-2 px-4 rounded-2xl">📘 সূচিপত্র দেখুন</button>
      </div>
        <Slider jsonUrl={'/public/TableOfContents.json'}/>
    </div>
  );
};

export default TableOfContents;
