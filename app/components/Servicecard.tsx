import Image from "./Image";

export default function Servicecard({
  slug,
  title,
  subtitle,
  icon,
}: {
  slug: string | undefined;
  title: string | undefined;
  subtitle: string | undefined;
  icon: string | undefined | null;
}) {
  return (
    <>
      <h4>{title}</h4>
      <p>{subtitle}</p>
    </>
  );
}
