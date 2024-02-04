import { config } from "@keystatic/core";

import banner from "./app/schemas/singleton/banner";
import posts from "./app/schemas/collections/posts";
import authors from "./app/schemas/collections/authors";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    banner,
  },
  collections: {
    posts,
    authors,
  },
});
