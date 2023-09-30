"use client";
import { formalUrlQuery } from "@/sanity/utils";
import React, { useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
const Filters = () => {
  const [active, setActive] = useState("");
  const searchParams = useSearchParams();
  const links = ["All", "Next13", " Frontend", "backend", "Fullstack "];

  const handleFilter = (link: string) => {
    let newurl = formalUrlQuery({
      params: searchParams.toString(),
      key: "category",
      value: null,
    });
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
