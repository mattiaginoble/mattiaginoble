import { motion } from "framer-motion";
import { PrismicNextLink } from "@prismicio/next";
import { SettingsDocument } from "../../../prismicio-types";
import { ComponentProps } from "react";

const ulVariants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

const liVariants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

type NavigationProps = {
  settings: SettingsDocument<string>;
  toggle: ComponentProps<typeof PrismicNextLink>["onClick"];
};

export default function Navigation({ settings, toggle }: NavigationProps) {
  return (
    <motion.ul
      className="absolute p-6 top-1/3 ml-6 flex flex-col gap-6"
      variants={ulVariants}
    >
      <motion.li variants={liVariants}>
        <PrismicNextLink
          field={{ url: "/", link_type: "Web" }}
          onClick={toggle}
          className="p-1 sm:p-3 text-5xl active:opacity-80 transition-opacity"
        >
          Home
        </PrismicNextLink>
      </motion.li>
      {settings.data.navigation.map(({ link, label }) => (
        <motion.li key={label} variants={liVariants}>
          <PrismicNextLink
            field={link}
            onClick={toggle}
            className="p-1 sm:p-3 text-5xl active:opacity-80 transition-opacity"
          >
            {label}
          </PrismicNextLink>
        </motion.li>
      ))}
    </motion.ul>
  );
}

const itemIds = [0, 1, 2, 3, 4];
