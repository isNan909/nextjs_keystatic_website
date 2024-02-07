import { config } from "@keystatic/core";

import banner from "./app/schemas/singleton/banner";
import about from "./app/schemas/singleton/about";
import cta from "./app/schemas/singleton/cta";
import posts from "./app/schemas/collections/posts";
import authors from "./app/schemas/collections/authors";
import services from "./app/schemas/collections/services";

export default config({
  storage: {
    kind: "local",
  },
  singletons: {
    banner,
    about,
    cta,
  },
  collections: {
    posts,
    authors,
    services,
  },
});
