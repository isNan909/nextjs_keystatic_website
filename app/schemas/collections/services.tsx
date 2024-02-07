import { collection, fields } from "@keystatic/core";

export default collection({
  label: "Services",
  slugField: "title",
  path: "content/services/*",
  schema: {
    title: fields.slug({
      name: {
        label: "Heading",
      },
    }),
    subtitle: fields.text({
      label: "Sub heading",
      validation: { length: { min: 4 } },
    }),
    icon: fields.image({
      label: "Image",
      directory: "public/images/services",
    }),
  },
});
