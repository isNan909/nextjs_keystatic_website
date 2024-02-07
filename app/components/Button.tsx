import Link from "next/link";

type IButtonProps = {
  href: string;
  label: string;
};

const buttonClasses =
  "px-4 py-2 bg-text-cyan-700 text-white hover:text-white hover:bg-black rounded-md no-underline hover:cursor-pointer";

const Button = ({ href, label }: IButtonProps) => {
  return (
    <Link href={href} className={buttonClasses}>
      {label}
    </Link>
  );
};

export default Button;
