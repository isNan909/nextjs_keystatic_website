export default function Herobanner({
  heading,
  subheading,
  image,
  buttontxt,
  url,
}: {
  heading: string;
  subheading: string;
  image: string;
  buttontxt: string;
  url: string;
}) {
  return (
    <div>
      {heading}
      {subheading}
      {image}
      <a href={url}>{buttontxt}</a>
    </div>
  );
}
