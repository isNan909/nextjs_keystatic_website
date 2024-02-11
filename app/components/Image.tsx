const Image = ({
  src,
  alt,
  className,
  caption,
}: {
  src: string | null | undefined;
  alt: string;
  caption?: string;
  className?: string | null | undefined;
}) => {
  return (
    <>
      <img src={`${src}`} alt={alt} className={className || ""} />
      {caption && <p className="mt-0 text-center text-sm">{caption}</p>}
    </>
  );
};

export default Image;
