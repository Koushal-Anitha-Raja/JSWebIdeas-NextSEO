import Filters from "@/components/Filters";
import Header from "@/components/Header";
import ResourceCard from "@/components/ResourceCard";
import Searchform from "@/components/Searchform";
import { getResources } from "@/sanity/actions";
import React from "react";
//the page will refresh and render data every 900 seconds(15 minutes)
export const revalidate = 900;

interface Props {
  searchParams: {
    [key: string]: string | undefined;
  };
}

const Page = async ({ searchParams }: Props) => {
  const resources = await getResources({
    query: "",
    category: "",
    page: "1",
  });

  return (
    <main className="flex-center paddings mx-auto w-full max-w-screen-2xl flex-col">
      <section className="nav-padding w-full">
        <div className="flex-center relative min-h-[274px] w-full flex-col rounded-xl bg-banner bg-coverbg-center text-center">
          <h1 className="sm:heading1 heading2 mb-6 text-center text-white">
            JavaScript Mastery Resources
          </h1>
        </div>
        <Searchform />
      </section>
      <Filters />
      <section className="flex-center mt-6 w-full flex-col sm:mt-20">
        <Header />
        <div className="mt-12 flex w-full flex-wrap justify-center gap-16 sm:justify-start">
          {resources?.length > 0 ? (
            resources.map((resource: any) => (
              <ResourceCard
                key={resource._id}
                title={resource.title}
                id={resource._id}
                image={resource.image}
                downloadNumber={resource.views}
              />
            ))
          ) : (
            <p className="body-regular text-white-400">No resources found</p>
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
