import { groq } from "next-sanity";
import { readclient } from "./lib/client";
import { buildQuery } from "./utils";

interface GetResourcesParams {
  query: string;
  category: string;
  page: string;
}

export const getResources = async (params: GetResourcesParams) => {
  const { query, category, page } = params;

  try {
    const resources = await readclient.fetch(groq`${buildQuery({
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
        catogory,
    }`);
    return resources;
  } catch (error) {
    console.log("error");
  }
};
