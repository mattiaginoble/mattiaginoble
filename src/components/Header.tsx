import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";
import MenuButton from "./Menu/MenuButton";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <Bounded
      as="header"
      className="py-4 md:py-6 lg:py-8 pb-0 sticky top-0 bg-white dark:bg-[#141414] dark:text-white"
    >
      <div className="flex gap-4 items-center justify-between flex-row border-b dark:border-[#454545] pb-4 sm:text-2xl text-lg font-semibold font-display">
        <Link href="/">{settings.data.site_title}</Link>

        <nav>
          <ul className="hidden md:flex">
            {settings.data.navigation.map(({ link, label }) => (
              <li key={label}>
                <PrismicNextLink field={link} className="p-1 sm:p-3">
                  {label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>

          <div className="block md:hidden">
            <MenuButton />
          </div>
        </nav>
      </div>
    </Bounded>
  );
}
