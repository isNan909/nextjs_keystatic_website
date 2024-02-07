import { component, fields } from "@keystatic/core";

import Image from "../components/Image";
import CallToAction from "./CallToAction";

export const ComponentBlocks = {
  image: component({
    label: "Image",
    preview: (props) => (
      <Image
        src={props.fields.src.value}
        alt={props.fields.alt.value}
        caption={props.fields.caption.value}
      />
    ),
    schema: {
      src: fields.text({
        label: "File URL",
        validation: { length: { min: 4 } },
      }),
      alt: fields.text({
        label: "Alt text",
        validation: { length: { min: 4 } },
      }),
      caption: fields.text({ label: "Caption" }),
    },
  }),
  inlineCta: component({
    label: "Inline CTA",
    preview: (props) => (
      <CallToAction
        title={props.fields.title.value}
        summary={props.fields.summary.value}
        linkButton={{
          href: props.fields.href.value || "",
          label: props.fields.linkLabel.value,
        }}
      />
    ),
    schema: {
      title: fields.text({ label: "Title" }),
      summary: fields.text({ label: "Summary" }),
      linkLabel: fields.text({ label: "Link Label" }),
      href: fields.url({
        label: "Link",
        defaultValue: "/",
        validation: { isRequired: true },
      }),
    },
  }),
};
