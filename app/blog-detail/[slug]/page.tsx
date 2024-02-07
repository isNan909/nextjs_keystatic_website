import { DocumentRenderer } from "@keystatic/core/renderer";
import { reader } from "../../reader";
import Image from "../../components/Image";
import { ComponentBlocks as componentBlocks } from "../../components/ComponentBlocks";

export default async function Post({ params }: { params: { slug: string } }) {
  const { slug } = params;

  const post = await reader.collections.posts.read(slug);

  if (!post) return <div>Post not found!</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div>
        <DocumentRenderer
          document={await post.content()}
          componentBlocks={{
            image: (props) => (
              <Image src={props.src} alt={props.alt} caption={props.caption} />
            ),
          }}
        />
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  const slugs = await reader.collections.posts.list();

  return slugs.map((slug) => ({
    slug,
  }));
}
