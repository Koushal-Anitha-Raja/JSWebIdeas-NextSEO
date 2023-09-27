interface BuildQueryParams {
  type: string;
  query: string;
  category: string;
  page: number;
  perPage?: number;
}

export function buildQuery(params: BuildQueryParams) {
  const { type, query, category, page = 1, perPage = 10 } = params;

  const conditions = [`*[_type=="${type}"]`]; //base condition

  if (query) conditions.push(`title match "*${query}*"`); //based on the condition we are adding some query or category

  if (category && category !== "all") {
    conditions.push(`category == "${category}"`);
  }
}
