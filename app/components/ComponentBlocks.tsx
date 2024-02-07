import { component, fields } from "@keystatic/core";

import Image from "../components/Image";

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
};
