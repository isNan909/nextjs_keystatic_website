import { config } from "@keystatic/core";

import banner from "./app/schemas/singleton/banner";
import posts from "./app/schemas/collections/posts";
import authors from "./app/schemas/collections/authors";
import about from "./app/schemas/singleton/about";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    banner,
    about,
  },
  collections: {
    posts,
    authors,
  },
});
