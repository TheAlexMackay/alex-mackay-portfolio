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
import clsx from "clsx"

const components: JSXMapSerializer = {
  heading2: ({children})=>(
      <Heading as="h2" size="lg" className="">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="max-w-md text-lg font-body text-slate-600">{children}</p>
  )
}

/**
 * Props for `ImageAndText`.
 */
export type ImageAndTextProps = SliceComponentProps<Content.ImageAndTextSlice>;

/**
 * Component for "ImageAndText" Slices.
 */
const ImageAndText: FC<ImageAndTextProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="grid gap-8 md:grid-cols-2 place-items-center">
        <PrismicNextImage field={slice.primary.image}
                          className={clsx('rounded-lg', slice.variation === "imageRight" && "md:order-2")} />
        <div className="grid gap-4">
          <PrismicRichText field={slice.primary.heading} components={components}/>
          <PrismicRichText field={slice.primary.content} components={components}/>
        </div>
      </div>


    </Bounded>
  );
};

export default ImageAndText;
