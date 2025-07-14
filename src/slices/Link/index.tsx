import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "../../components/Bounded";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react/src/PrismicRichText";
import { createClient } from "../../prismicio";
import { isFilled } from "@prismicio/client";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading as="h2" size="xl" className="mb-8 font-semibold">{children}</Heading>
  ),
  paragraph: ({children}) => (
      <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">{children}</p>
  )
}

/**
 * Props for `Link`.
 */
export type LinkProps = SliceComponentProps<Content.LinkSlice>;

/**
 * Component for "Link" Slices.
 */
const Link: FC<LinkProps> = ({ slice }) => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="border-b-1 border-white flex gap-8 flex-col md:flex-row pb-8">
          <Button field={slice.primary.link}>
            {slice.primary.link_text}
          </Button>
        </div>
      </Bounded>
  );
};

export default Link;
