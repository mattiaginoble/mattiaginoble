"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import Link from "next/link";

import React, { useState, useRef, useCallback } from "react";
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
                className=" fixed inset-0 bg-[#141414]/70 backdrop-blur-2xl"
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
                className="w-fit items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                key="modal"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div layoutId={selectedItem.id.toString()}>
                  <PrismicNextImage
                    width={500}
                    className="drag-none"
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
                className="select-none"
                key={id}
                layoutId={id.toString()}
                onClick={() => setSelectedItem({ id, item })}
              >
                <PrismicNextImage
                  className="drag-none"
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
