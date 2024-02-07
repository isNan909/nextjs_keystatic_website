import { collection, fields } from "@keystatic/core";
import { ComponentBlocks } from "../../components/ComponentBlocks";

export default collection({
  label: "Posts",
  slugField: "title",
  path: "content/posts/*",
  format: { contentField: "content" },
  schema: {
    title: fields.slug({
      name: {
        label: "Title",
      },
    }),
    summary: fields.text({
      label: "Summary",
      validation: { length: { min: 4 } },
    }),
    publishedDate: fields.date({ label: "Published Date" }),
    coverImage: fields.image({
      label: "Image",
      directory: "public/images/posts",
    }),
    wordCount: fields.integer({
      label: "Word count",
    }),
    authors: fields.array(
      fields.relationship({
        label: "Post author",
        collection: "authors",
      }),
      {
        label: "Authors",
        validation: { length: { min: 1 } },
        itemLabel: (props) => props.value || "Please select an author",
      }
    ),
    content: fields.document({
      formatting: true,
      dividers: true,
      links: true,
      images: true,
      label: "Content",
      componentBlocks: ComponentBlocks,
    }),
  },
});
