import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "./Bounded";

export default async function Footer({ settings }: any) {
  return (
    <Bounded as="footer">
      <div className="flex sm:flex-row flex-col justify-between items-center gap-6 border-t dark:border-[#454545] pt-8">
        <p>
          ©{new Date().getFullYear()} {settings.data.site_title}
        </p>

        <ul className="flex">
          {settings.data.social.map(({ link, label }: any) => (
            <li key={label}>
              <PrismicNextLink field={link} className="p-3">
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </div>
    </Bounded>
  );
}
