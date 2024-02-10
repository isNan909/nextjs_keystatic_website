import Link from "next/link";

type IButtonProps = {
  href: any;
  label: string | undefined;
};

const buttonClasses =
  "inline-block shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500";

const Button = ({ href, label }: IButtonProps) => {
  return (
    <Link href={href} className={buttonClasses}>
      {label}
    </Link>
  );
};

export default Button;
