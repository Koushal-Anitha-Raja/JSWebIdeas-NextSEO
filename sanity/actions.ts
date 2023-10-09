import { groq } from "next-sanity";
import { readClient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}
export const getResourcesplaylist = async () => {
  try {
    const resources = await readClient.fetch(
      //console.log the groq query

      groq`*[_type == "resourcesplaylist"]{
        _id,
        title,
        resources[0...6]->{
          title,
          _id,
          downloadLink,
          "image": poster.asset->url,
          views,
          category
        }
      }`
    );

    return resources;
  } catch (error) {
    console.log(error);
  }
};

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  // console.log("Hello there, ", category);

  try {
    const resources = await readClient.fetch(groq`${buildQuery({
      type: "resource",
      query,
      category,
      page: parseInt(page),
    })}{
        title,
        _id,
        downloadLink,
        "image":poster.asset->url,
        views,
        slug,
       category,
    }`);
    return resources;
  } catch (error) {
    console.log(error);
  }
};
