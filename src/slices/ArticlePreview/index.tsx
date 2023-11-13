import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "@/components/Bounded";
import Preview from "@/components/Preview";

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
      <Preview field={slice.primary.link_text}>
        <div className="mb-4">
          <PrismicNextImage field={slice.primary.image} />
        </div>

        <div>
          <div> {slice.primary.primary_text}</div>
          <div> {slice.primary.secondary_text}</div>
        </div>
      </Preview>
    </Bounded>
  );
};

export default ArticlePreview;
