"use client";

import { useEffect } from "react";
import { motion, useCycle } from "framer-motion";
import MenuToggle from "./MenuToggle";
import Navigation from "./Navigation";
import { SettingsDocument } from "../../../prismicio-types";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at calc(100% - 40px) 30px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
    opacity: 1,
    pointerEvents: "auto" as any,
  }),
  closed: {
    clipPath: "circle(10px at calc(100% - 40px) 30px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
    opacity: 0.8,
    pointerEvents: "none" as any,
  },
};

type AnimatedMenuProps = {
  settings: SettingsDocument<string>;
};

export default function AnimatedMenu({ settings }: AnimatedMenuProps) {
  const [isOpen, toggleOpen] = useCycle(false, true);

  useEffect(() => {
    document.body.style.overflowY = isOpen ? "hidden" : "visible";
    return () => {
      document.body.style.overflowY = "visible";
    };
  }, [isOpen]);

  return (
    <motion.nav
      className="fixed block md:hidden z-10"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom="100%"
    >
      <motion.div
        className="fixed inset-0 w-full bg-white/90 dark:bg-[#141414]/90 backdrop-blur-sm z-0"
        variants={sidebar}
      />
      <motion.div
        className="z-50"
        variants={{
          open: { pointerEvents: "auto" },
          closed: { pointerEvents: "none" },
        }}
      >
        <Navigation toggle={() => toggleOpen()} settings={settings} />
      </motion.div>
      <MenuToggle toggle={() => toggleOpen()} />
    </motion.nav>
  );
}
