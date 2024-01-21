"use client";

import clsx from "clsx";
import { motion } from "framer-motion";
import { ComponentProps } from "react";

function Path(props: ComponentProps<typeof motion.path>) {
  return (
    <motion.path
      fill="transparent"
      strokeWidth="3"
      stroke="hsl(0, 0%, 18%)"
      strokeLinecap="round"
      {...props}
      className={clsx("stroke-black dark:stroke-white", props.className)}
    />
  );
}

type MenuToggleProps = {
  toggle: ComponentProps<"button">["onClick"];
};

export default function MenuToggle({ toggle }: MenuToggleProps) {
  return (
    <button
      onClick={toggle}
      className="fixed flex items-center justify-center top-[6px] sm:top-2 right-[15px] w-[50px] h-[50px] rounded-full z-20"
    >
      <svg width="23" height="23" viewBox="0 0 23 23">
        <Path
          variants={{
            closed: { d: "M 2 2.5 L 20 2.5" },
            open: { d: "M 3 16.5 L 17 2.5" },
          }}
        />
        <Path
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          variants={{
            closed: { d: "M 2 16.346 L 20 16.346" },
            open: { d: "M 3 2.5 L 17 16.346" },
          }}
        />
      </svg>
    </button>
  );
}
