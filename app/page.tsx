import Link from "next/link";
import { reader } from "./reader";
import Herobanner from "./components/Herobanner";
import Image from "./components/Image";
import CallToAction from "./components/CallToAction";
import "./styles.css";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  const services = await reader.collections.services.all();
  const banner = await reader.singletons.banner.read();
  const cta = await reader.singletons.cta.read();

  console.log(services, "services");

  return (
    <div>
      <Herobanner
        heading={banner?.heading}
        subheading={banner?.subheading}
        image={`images/hero/${banner?.image}`}
        buttontxt={banner?.buttontxt}
        url={banner?.url}
      />
      <ul>
        <section>
          <h3>Our blogs</h3>
          {posts.map((post) => (
            <li key={post.slug}>
              <Link href={`/blog-detail/${post.slug}`}>
                <Image
                  src={`images/posts/${post.slug}/${post.entry.coverImage}`}
                  alt=""
                  caption=""
                />
                <strong>{post.entry.title}</strong>
                <p>{post.entry.summary.slice(0, 200)}</p>
              </Link>
            </li>
          ))}
        </section>
      </ul>
      <CallToAction
        title={cta?.heading || ""}
        summary={cta?.subheading || ""}
        linkButton={{
          href: `${cta?.url || ""}`,
          label: `${cta?.buttontxt || ""}`,
        }}
      />
    </div>
  );
}
