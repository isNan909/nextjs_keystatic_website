import Link from "next/link";
import { reader } from "./reader";
import Herobanner from "./components/Herobanner";
import Image from "./components/Image";
import CallToAction from "./components/CallToAction";
import Servicecard from "./components/Servicecard";
import "./styles.css";

export default async function Homepage() {
  const posts = await reader.collections.posts.all();
  const services = await reader.collections.services.all();
  const banner = await reader.singletons.banner.read();
  const cta = await reader.singletons.cta.read();

  return (
    <div>
      <Herobanner
        heading={banner?.heading}
        subheading={banner?.subheading}
        image={`images/hero/${banner?.image}`}
        buttontxt={banner?.buttontxt}
        url={banner?.url}
      />
      <section>
        <ul className="list-none">
          {services.map((service) => (
            <li className="list-none" key={service.slug}>
              <Servicecard
                slug={service.slug}
                title={service.entry.title}
                subtitle={service.entry.subtitle}
                icon={service.entry.icon}
              />
            </li>
          ))}
        </ul>
      </section>
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
