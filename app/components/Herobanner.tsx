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
      <section className="py-32 text-center max-w-4xl mx-auto">
        <h1
          className="text-3xl font-extrabold sm:text-5xl 
text-center"
        >
          {heading}
        </h1>
        <p className="mt-4 sm:text-xl/relaxed text-center">{subheading}</p>
        <Button href={url} label={buttontxt} />
        <Image src={`${image}`} alt="" caption="" className="w-full  pt-8" />
      </section>
    </div>
  );
}
