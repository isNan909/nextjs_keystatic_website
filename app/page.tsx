import Link from "next/link";
import { reader } from "./reader";
import Herobanner from "./components/Herobanner";
import "./styles.css";
import Image from "./components/Image";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  const banner = await reader.singletons.banner.read();

  return (
    <div>
      <ul>
        <Herobanner
          heading={banner?.heading}
          subheading={banner?.subheading}
          image={banner?.image}
          buttontxt={banner?.buttontxt}
          url={banner?.url}
        />
        {posts.map((post) => (
          <li key={post.slug}>
            <Image
              src={`../public/images/hero/${post.entry.coverImage}`}
              alt=""
              caption=""
            />
            <Link href={`/blog-detail/${post.slug}`}>{post.entry.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
