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
      <div className="grid grid-cols-1 md:grid-cols-1 place-items-start">
        <Preview field={slice.primary.link_text}>
          <PrismicNextImage
            field={slice.primary.image}
            className="max-w-7xl w-full mb-4"
          />
          <div className="grid grid-rows-[1fr,auto,auto] h-fit">
            {slice.primary.primary_text}{" "}
            <div> {slice.primary.secondary_text}</div>{" "}
          </div>
        </Preview>
      </div>
    </Bounded>
  );
};

export default ArticlePreview;
