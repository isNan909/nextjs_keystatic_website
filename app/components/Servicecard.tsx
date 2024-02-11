import Image from "./Image";

export default function Servicecard({
  slug,
  title,
  subtitle,
  icon,
}: {
  slug?: string | undefined;
  title: string | undefined;
  subtitle: string | undefined;
  icon: string | undefined | null;
}) {
  return (
    <>
      <Image
        src={`images/services/${title}/${icon}`}
        alt=""
        caption=""
        className="w-20"
      />
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </>
  );
}
