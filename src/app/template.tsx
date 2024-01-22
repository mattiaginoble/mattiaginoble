"use client";

import { motion, AnimatePresence, Spring } from "framer-motion";

export default function Template({ children }: { children: React.ReactNode }) {
  const transitionSpringPhysics: Spring = {
    type: "spring",
    mass: 0.2,
    stiffness: 80,
    damping: 10,
  };
  const transitionColor = "#141414";

  return (
    <div>
      <AnimatePresence mode="wait">
        <motion.div>
          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              bottom: 0,
            }}
            transition={transitionSpringPhysics}
            animate={{ height: "0vh" }}
            exit={{ height: "100vh" }}
          />

          <motion.div
            style={{
              backgroundColor: transitionColor,
              position: "fixed",
              width: "100vw",
              zIndex: 1000,
              top: 0,
            }}
            transition={transitionSpringPhysics}
            initial={{ height: "100vh" }}
            animate={{ height: "0vh", transition: { delay: 0.4 } }}
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ease: "easeInOut", duration: 1 }}
          >
            {children}
          </motion.div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
