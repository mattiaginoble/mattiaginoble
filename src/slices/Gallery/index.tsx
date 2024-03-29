"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

import React, { useState, useRef, useCallback, useEffect } from "react";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

interface Item {
  id: number;
  item: any;
}

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  const [selectedItem, setSelectedItem] = useState<Item>();
  const backdropRef = useRef(null);

  const handleClose = useCallback(() => setSelectedItem(undefined), []);

  useEffect(() => {
    document.body.style.overflow = selectedItem ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedItem]);

  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <LayoutGroup>
        <AnimatePresence>
          {!!selectedItem && (
            <>
              <motion.div
                className="fixed inset-0 bg-[#141414]/70 backdrop-blur-2xl z-20"
                key="backdrop"
                onClick={handleClose}
                variants={{
                  hidden: {
                    opacity: 0,
                    transition: {
                      duration: 0.16,
                    },
                  },
                  visible: {
                    opacity: 1,
                    transition: {
                      delay: 0.04,
                      duration: 0.2,
                    },
                  },
                }}
                initial="hidden"
                exit="hidden"
                animate="visible"
              />

              <motion.div
                className="w-full flex justify-center items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none md:pointer-events-auto z-50"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={handleClose}
              >
                <motion.div layoutId={selectedItem.id.toString()}>
                  <PrismicNextImage
                    // width={1000}
                    className="drag-none max-w-[90vw] max-h-[90vh] w-full h-auto object-contain"
                    key={selectedItem.item.image.url}
                    field={selectedItem.item.image}
                  />
                </motion.div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        <ResponsiveMasonry>
          <Masonry gutter={"1rem"}>
            {slice.items.map((item, id) => (
              <motion.div
                className="select-none cursor-pointer"
                key={id}
                layoutId={id.toString()}
                onClick={() => setSelectedItem({ id, item })}
              >
                <PrismicNextImage
                  className="drag-none w-full md:w-auto"
                  key={item.image.url}
                  field={item.image}
                />
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </LayoutGroup>
    </Bounded>
  );
};

export default Gallery;
