"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import { formUrlQuery } from "@/sanity/utils";

const Searchform = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  const [Search, setSearch] = useState("");

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      let newurl = "";
      if (Search) {
        newurl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: Search,
        });
      } else {
        newurl = formUrlQuery({
          params: searchParams.toString(),
          keysToRemove: ["query"],
        });
      }
      router.push(newurl, { scroll: false });
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [Search]);

  return (
    <form className="flex-center mx-auto mt-10 w-full sm:-mt-6 sm:px-5">
      <label className="flex-center relative w-full max-w-3xl">
        <Image
          src="/magnifying-glass.svg"
          className="absolute left-8"
          width={32}
          height={32}
          alt="search icon"
        />
        <Input
          className=" base-regular h-fit border-0 bg-black-400 py-3 pl-20 pr-8 text-white-800 !ring-0 !ring-offset-0 placeholder:text-white-800 "
          type="text"
          placeholder="Search"
          value={Search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </label>
    </form>
  );
};

export default Searchform;
