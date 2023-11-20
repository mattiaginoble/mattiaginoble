"use client";

import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

import Bounded from "@/components/Bounded";
import { PrismicNextImage } from "@prismicio/next";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

/**
 * Props for `Gallery`.
 */
export type GalleryProps = SliceComponentProps<Content.GallerySlice>;

/**
 * Component for "Gallery" Slices.
 */
const Gallery = ({ slice }: GalleryProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <ResponsiveMasonry>
        <Masonry gutter={"1rem"}>
          {slice.items.map((item) => {
            return <PrismicNextImage key={item.image.url} field={item.image} />;
          })}
        </Masonry>
      </ResponsiveMasonry>
    </Bounded>
  );
};

export default Gallery;
