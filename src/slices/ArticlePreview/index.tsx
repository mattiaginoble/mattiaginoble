import { Content } from "@prismicio/client";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";

/**
 * Props for `ArticlePreview`.
 */
export type ArticlePreviewProps =
  SliceComponentProps<Content.ArticlePreviewSlice>;

/**
 * Component for "ArticlePreview" Slices.
 */
const ArticlePreview = ({ slice }: ArticlePreviewProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicNextLink field={slice.primary.link}>
        <div className="grid grid-cols-6 gap-4">
          <PrismicNextImage
            field={slice.primary.image}
            className="col-start-1 col-end-7"
          />
          <PrismicRichText
            field={slice.primary.heading}
            components={{
              heading1: ({ children }) => (
                <h1 className="col-start-1 col-end-7 sm:text-xl text-base font-semibold leading-tight tracking-tight font-display">
                  {children}
                </h1>
              ),
            }}
          />
        </div>
      </PrismicNextLink>
    </Bounded>
  );
};

export default ArticlePreview;
