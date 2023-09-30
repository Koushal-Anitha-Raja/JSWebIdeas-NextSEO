import QueryString from "qs";

interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

interface urlQueryParams {
  params: string;
  key: string;
  value: string | null;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"]`]; //base condition

  if (query) conditions.push(`title match "*${query}*"`); //based on the condition we are adding some query or category

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }
  //calculate the offset for pagination
  const offset = (page - 1) * perPage;
  const limit = perPage;

  if (conditions.length > 1) {
    return `${conditions[0]} && (${conditions
      .slice(1)
      .join(" && ")})] [${offset}...${limit}]`;
  } else {
    return `${conditions[0]}[${offset}...${limit}]`;
  }
}

export function formalUrlQuery({ params, key, value }: urlQueryParams) {
  const currentUrl = QueryString.parse(params);
  console.log(currentUrl, key, value);
}
