"use client";

import Link from "next/link";

export type navbarTypes = {
  name: string;
  slug: string;
  description: string;
};

export const NavItems = [
  {
    name: "Home",
    slug: "/",
    description: "A Website homepage",
  },
  {
    name: "About",
    slug: "/about",
    description: "About page of the website",
  },
];

export default async function Navbar() {
  return (
    <nav className="flex justify-between py-4">
      <div>
        <Link href="/">
          <span className="font-extrabold text-lg">⚡️ Supercharger</span>
        </Link>
      </div>
      <div className="flex gap-4">
        {NavItems.map((item: navbarTypes) => (
          <Link key={item.slug} className="text-gray-800" href={item.slug}>
            {item.name}
          </Link>
        ))}
      </div>
    </nav>
  );
}
