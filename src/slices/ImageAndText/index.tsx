import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react";
import clsx from "clsx"

const components: JSXMapSerializer = {
  heading2: ({children})=>(
      <Heading as="h2" size="xl" className="leading-none font-bold mb-4 md:mb-8">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="text-1 font-normal font-body mb-4 md:mb-8">{children}</p>
  ),
  listItem: ({children})=>(
      <ul className="list-disc ml-[15px]">
        <li className="text-1 font-normal font-body mb-4 md:mb-8">{children}</li>
      </ul>
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
      <div className={clsx('border-b-1 border-white flex gap-16 flex-col pb-8', slice.variation === "imageRight" && "md:flex-row-reverse")}>
        <div className="w-[100%] w-md-[66.6%]">
          <PrismicNextImage field={slice.primary.image} className="" />
        </div>
        <div className="w-[66.6%] w-md-[33.3%] gap-4">
          <PrismicRichText field={slice.primary.heading} components={components}/>
          <PrismicRichText field={slice.primary.content} components={components}/>
        </div>
      </div>


    </Bounded>
  );
};

export default ImageAndText;
