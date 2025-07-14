import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Button from "../../components/Button";

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
