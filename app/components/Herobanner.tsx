import Button from "./Button";
import Image from "./Image";
export default function Herobanner({
  heading,
  subheading,
  image,
  buttontxt,
  url,
}: {
  heading: string | undefined;
  subheading: string | undefined;
  image: string | undefined | null;
  buttontxt: string | undefined;
  url: string | undefined | null;
}) {
  return (
    <div>
      <section
        className={`relative bg-${image} bg-cover bg-center bg-no-repeat`}
      >
        <h1>{heading}</h1>
        <p>{subheading}</p>
        <Image src={`${image}`} alt="" caption="" className="w-full" />
        <Button href={url} label={buttontxt} />
      </section>
    </div>
  );
}
