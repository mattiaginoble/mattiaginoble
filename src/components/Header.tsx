import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded
      as="header"
      className="pb-0 pt-4 md:pb-0 md:pt-2 lg:pb-0 lg:pt-10 bg-white sticky top-0"
    >
      <div className="flex gap-4 items-center justify-between flex-row border-b pb-4 text-xl font-semibold font-display">
        <Link href="/">{settings.data.site_title}</Link>
        <nav>
          <ul className="flex">
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-2 lg:p-3">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </Bounded>
  );
}
