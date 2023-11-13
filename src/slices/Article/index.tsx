import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";

/**
 * Props for `Article`.
 */
export type ArticleProps = SliceComponentProps<Content.ArticleSlice>;

/**
 * Component for "Article" Slices.
 */
const Article = ({ slice }: ArticleProps): JSX.Element => {
  return (
    <>
      {slice.variation === "default" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 place-items-center text-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="max-w-4xl w-full"
            />
            <PrismicRichText field={slice.primary.heading_title} />
            <PrismicRichText field={slice.primary.heading_sub} />
          </div>
        </Bounded>
      )}

      {slice.variation === "articleBody" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
            <PrismicNextImage
              field={slice.primary.image}
              className="max-w-4xl w-full"
            />
            <PrismicNextImage field={slice.primary.image_medium} />
            <PrismicNextImage field={slice.primary.image_small} />
            <div className="grid grid-rows-[1fr,auto,auto] h-fit">
              <PrismicRichText field={slice.primary.body} />
            </div>
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Article;
