const schema = {
  name: "resource",
  title: "Resource",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
      required: true,
      validation: (rule: any) => rule.required(),
    },
    {
      name: "slug",
      title: "slug",
      type: "slug",
      options: { source: "title" },
    },
    {
      name: "downloadLink",
      title: "Download Link",
      type: "url",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "views",
      title: "views",
      type: "number",
      initialValue: 0,
    },
    {
      name: "poster",
      title: "poster",
      type: "image",
      validation: (Rule: any) => Rule.required(),
      options: {
        hotspot: true,
      },
    },
    {
      name: "category",
      title: "Category",
      type: "string",
      validation: (Rule: any) => Rule.required(),
      options: {
        list: ["Frontend", "Backend", "FullStack", "Next13", " Other"],
      },
    },
  ],
};
export default schema;
