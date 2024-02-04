import { collection, fields } from "@keystatic/core";

export default collection({
  label: "Authors",
  path: "content/authors/*",
  slugField: "name",
  schema: {
    name: fields.slug({
      name: {
        label: "Name",
        validation: {
          length: {
            min: 1,
          },
        },
      },
    }),
    role: fields.text({ label: "Role" }),
    avatar: fields.image({
      label: "Author avatar",
      directory: "public/images/authors",
    }),
  },
});
