import clsx from "clsx";
import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function Article({
  className,
  ...restProps
}: PrismicNextLinkProps) {
  return (
    <PrismicNextLink
      className={clsx(
        "text-lg md:text-xl font-semibold leading-5 font-display",
        className
      )}
      {...restProps}
    />
  );
}
