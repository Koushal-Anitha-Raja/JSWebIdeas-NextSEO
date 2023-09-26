const schema = {
  name: "resourceplaylist",
  title: "resourceplaylist",
  type: "document",
  field: [
    {
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "resources",
      title: "Resoruces",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "resource" }],
        },
      ],
    },
  ],
};

export default schema;
