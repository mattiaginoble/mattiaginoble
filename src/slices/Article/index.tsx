import { Content } from "@prismicio/client";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";
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
          <div className=" md:grid md:grid-cols-6 md:gap-4 space-y-4 mb-4">
            <PrismicNextImage
              field={slice.primary.image}
              className="col-start-1 col-end-7 pb-32 border-b dark:border-[#454545] drop-shadow-xl"
            />
            <PrismicRichText
              field={slice.primary.heading_title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="col-start-1 col-end-3 text-2xl font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </h1>
                ),
              }}
            />

            <PrismicRichText
              field={slice.primary.heading_side}
              components={{
                heading1: ({ children }) => (
                  <h1 className="col-start-3 col-end-7 text-2xl font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
        </Bounded>
      )}

      {slice.variation === "articleBody" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="md:grid md:grid-cols-6 md:gap-x-4 md:gap-y-32 space-y-8 md:space-y-0">
            <PrismicNextImage
              field={slice.primary.image}
              className="col-start-1 col-end-7 drop-shadow-xl"
            />

            <PrismicRichText
              field={slice.primary.body_right}
              components={{
                paragraph: ({ children }) => (
                  <p className="col-start-1 col-end-3 text-lg font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </p>
                ),
              }}
            />
            <PrismicNextImage
              field={slice.primary.image_small_right}
              className="col-start-3 col-end-7 col-span-2 object-cover min-h-full w-full drop-shadow-xl"
            />

            <PrismicNextImage
              field={slice.primary.image_small_left}
              className="col-start-1 col-end-5 col-span-2 object-cover min-h-full w-full drop-shadow-xl !mt-20 md:!mt-0"
            />
            <PrismicRichText
              field={slice.primary.body_left}
              components={{
                paragraph: ({ children }) => (
                  <p className="col-start-5 col-end-7 text-lg font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </p>
                ),
              }}
            />
          </div>
        </Bounded>
      )}
      {slice.variation === "articlePhoto" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="md:grid md:grid-cols-6 md:gap-4 space-y-10 md:space-y-0">
            <PrismicNextImage
              field={slice.primary.image}
              className="col-start-1 col-end-7 drop-shadow-xl"
            />
            <PrismicNextImage
              field={slice.primary.image_small_left}
              className="col-start-1 col-end-4 col-span-2 object-cover min-h-full w-full drop-shadow-xl"
            />
            <PrismicNextImage
              field={slice.primary.image_small_right}
              className="col-start-4 col-end-7 col-span-2 object-cover min-h-full w-full drop-shadow-xl"
            />
          </div>
        </Bounded>
      )}

      {slice.variation === "articleList" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className="md:grid md:grid-cols-6 md:gap-4 border-t dark:border-[#454545] pt-8 md:pt-32">
            <PrismicRichText
              field={slice.primary.heading_title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="col-start-1 col-end-3 pb-8 text-2xl font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </h1>
                ),
              }}
            />
            <div className="grid grid-row-auto md:grid-cols-2 md:col-span-4 gap-8 md:gap-40">
              {slice.items.map((item) => {
                return (
                  <PrismicRichText
                    key={null}
                    field={item.heading_date}
                    components={{
                      heading1: ({ children }) => (
                        <h2 className="text-xl font-semibold leading-tight tracking-tight font-display text-neutral-950">
                          {children}
                        </h2>
                      ),
                    }}
                  />
                );
              })}
              {slice.items.map((item) => {
                return (
                  <PrismicRichText
                    key={null}
                    field={item.heading_side}
                    components={{
                      heading1: ({ children }) => (
                        <h1 className="text-xl font-semibold leading-tight tracking-tight font-display">
                          {children}
                        </h1>
                      ),
                    }}
                  />
                );
              })}
            </div>
          </div>
        </Bounded>
      )}

      {slice.variation === "articleText" && (
        <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
        >
          <div className=" md:grid md:grid-cols-6 md:gap-4 space-y-4 mb-4">
            <PrismicRichText
              field={slice.primary.heading_title}
              components={{
                heading1: ({ children }) => (
                  <h1 className="col-start-1 col-end-7 text-2xl font-semibold leading-tight tracking-tight font-display">
                    {children}
                  </h1>
                ),
              }}
            />
          </div>
        </Bounded>
      )}
    </>
  );
};

export default Article;
