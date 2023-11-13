import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import {
  JSXMapSerializer,
  PrismicRichText,
  SliceComponentProps,
} from "@prismicio/react";
import Bounded from "@/components/Bounded";

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
          <PrismicNextImage
            field={slice.primary.image}
            className="object-cover max-h-[40rem] max-w-7xl w-full pb-28 border-b"
          />
          <div className="md:grid md:grid-cols-2 gap-4 space-y-8 md:space-y-0 place-content-between mb-4 mt-4">
            <PrismicRichText
              field={slice.primary.heading_primary}
              components={{
                heading1: ({ children }) => (
                  <h1 className="text-2xl font-semibold">{children}</h1>
                ),
              }}
            />
            <div className="space-y-4">
              <PrismicRichText
                field={slice.primary.heading_secondary}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-2xl font-semibold">{children}</h1>
                  ),
                }}
              />
              <PrismicRichText
                field={slice.primary.heading_tertiary}
                components={{
                  heading1: ({ children }) => (
                    <h1 className="text-2xl font-semibold">{children}</h1>
                  ),
                }}
              />
            </div>
          </div>
        </Bounded>
      )}

      {slice.variation === "articleBody" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="mb-8">
            <PrismicNextImage field={slice.primary.image} />
          </div>

          <div className="md:grid md:grid-cols-2 gap-4 space-y-8 md:space-y-0 place-content-between mb-4 mt-4">
            <div className="space-y-4 md:max-w-sm">
              <PrismicRichText
                field={slice.primary.body_primary}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-lg font-semibold">{children}</p>
                  ),
                }}
              />

              <PrismicRichText
                field={slice.primary.body_secondary}
                components={{
                  paragraph: ({ children }) => (
                    <p className="text-lg font-semibold">{children}</p>
                  ),
                }}
              />
            </div>
            <div className="mb-8">
              <PrismicNextImage field={slice.primary.image_small} />
            </div>
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Article;
