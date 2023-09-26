"use client";
import React, { useState } from "react";

const Filters = () => {
  const [active, setActive] = useState("");
  const links = ["All", "Next13", " Frontend", "backend", "Fullstack "];

  const handleFilter = (link: string) => {
    setActive(link);
  };
  console.log({ active });
  return (
    <ul className="text-white-800 body-text no-scrollbar flex w-full max-w-full gap-2 overflow-auto py-12 sm:max-w-2xl">
      {links.map((link) => (
        <button
          key={link}
          onClick={() => handleFilter(link)}
          className={`${
            active === link ? "gradient_blue-purple" : ""
          } whitespace-nowrap rounded-lg px-8 py-2.5 capitalize`}
        >
          {link}
        </button>
      ))}
    </ul>
  );
};

export default Filters;
