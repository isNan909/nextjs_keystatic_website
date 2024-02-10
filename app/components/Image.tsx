const Image = ({
  src,
  alt,
  caption,
}: {
  src: string | null | undefined;
  alt: string;
  caption?: string;
}) => {
  return (
    <div className="flex flex-col items-center">
      <img src={`${src}`} alt={alt} className="w-full" />
      {caption && <p className="mt-0 text-center text-sm">{caption}</p>}
    </div>
  );
};

export default Image;
