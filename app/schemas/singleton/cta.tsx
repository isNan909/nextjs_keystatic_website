import { singleton, fields } from "@keystatic/core";

export default singleton({
  label: "CTABanner",
  path: "content/pages/cta/",
  schema: {
    heading: fields.text({
      label: "Heading (note: text that is bolded will show up in red)",
    }),
    subheading: fields.text({
      label: "Sub heading",
    }),
    buttontxt: fields.text({
      label: "Button text",
      multiline: false,
    }),
    url: fields.url({
      label: "URL",
      description: "The link of the website URL",
    }),
  },
});
