import CallToAction from "../components/CallToAction";
import { DocumentRenderer } from "@keystatic/core/renderer";
import Image from "../components/Image";
import { ComponentBlocks as componentBlocks } from "../components/ComponentBlocks";
import { reader } from "../reader";
import "../styles.css";

export default async function Aboutpage() {
  const aboutPage = await reader.singletons.about.read();
  const aboutPageContent = await (aboutPage?.content() || []);
  return (
    <>
      <DocumentRenderer
        document={aboutPageContent}
        componentBlocks={{
          image: (props) => (
            <Image src={props.src} alt={props.alt} caption={props.caption} />
          ),
          inlineCta: (props) => (
            <CallToAction
              title={props.title}
              summary={props.summary}
              linkButton={{
                href: props.href,
                label: props.linkLabel,
              }}
            />
          ),
        }}
      />
    </>
  );
}
