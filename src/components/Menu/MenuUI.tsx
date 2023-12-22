import { createClient } from "@/prismicio";
import { PrismicNextLink } from "@prismicio/next";
import { useEffect, useState, useRef } from "react";
import { useMenuContext } from "../Providers";
import MenuButton from "./MenuButton";

export default function MenuUI() {
  const client = useRef(createClient());
  const [settings, setSettings] = useState<any>();
  const [, setMenuContext] = useMenuContext();

  useEffect(() => {
    client.current.getSingle("settings").then((el) => setSettings(el));
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center text-center justify-center bg-[#141414]/90 backdrop-blur-sm z-10">
      <nav>
        <ul className="flex flex-col gap-4">
          {settings?.data.navigation.map(({ link, label }: any) => (
            <li key={label}>
              <PrismicNextLink
                field={link}
                onClick={() => {
                  setMenuContext((prev) => ({ ...prev, isOpen: false }));
                }}
                className="p-1 sm:p-3 text-2xl"
              >
                {label}
              </PrismicNextLink>
            </li>
          ))}
        </ul>
      </nav>

      <div className="fixed top-5 right-5">
        <MenuButton />
      </div>
    </div>
  );
}
