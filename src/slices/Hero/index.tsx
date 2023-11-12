import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Article from "@/components/Article";
import Heading from "@/components/Heading";

const components: JSXMapSerializer = {
  heading1: ({ children }) => (
    <Heading
      as="h1"
      size="xl"
      className="md:mb-8 mb-4 mt-12 first:mt-0 last:mb-0"
    >
      {children}
    </Heading>
  ),
};

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid grid-cols-1 md:grid-cols-1 place-items-start">
        <div className="grid grid-rows-[1fr,auto,auto] h-fit">
          <Article field={slice.primary.link}>
            <PrismicNextImage
              field={slice.primary.image}
              className="max-w-7xl w-full mb-4"
            />
            {slice.primary.post_title} <div> {slice.primary.post_subtitle}</div>
          </Article>
        </div>
      </div>
    </Bounded>
  );
};

export default Hero;
