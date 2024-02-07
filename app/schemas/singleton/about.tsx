import { singleton, fields } from "@keystatic/core";
import { ComponentBlocks } from "../../components/ComponentBlocks";

export default singleton({
  label: "About",
  path: "content/pages/about/",
  schema: {
    content: fields.document({
      formatting: true,
      dividers: true,
      links: true,
      layouts: [
        [1, 1],
        [1, 1, 1],
        [2, 1],
        [1, 2, 1],
      ],
      label: "Content",
      componentBlocks: ComponentBlocks,
    }),
  },
});
