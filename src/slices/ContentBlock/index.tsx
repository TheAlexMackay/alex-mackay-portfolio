import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({children})=>(
      <Heading as="h2" size="xl" className="leading-none mb-8">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="mb-8">{children}</p>
  )
}

/**
 * Props for `Content`.
 */
export type ContentProps = SliceComponentProps<Content.ContentSlice>;

/**
 * Component for "Content" Slices.
 */
const Content: FC<ContentProps> = ({ slice }) => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        {/*<div className="grid sm:grid-cols-2 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">*/}
        <div className="border-b-1 border-white grid grid-cols-1 gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
          {slice.primary.content_item.map((item, index) => (
              // <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">

              // slice.variation === "smallHeading" &&
              <div key={index} className="flex gap-4 w-[100%]">
                <div className="w-[66.6%]">
                  {item.bold_title ? (
                      <div className="font-bold">
                          <PrismicRichText components={components} field={item.content_title} />
                      </div>
                  ) : (
                      <PrismicRichText components={components} field={item.content_title} />
                  )}
                </div>
                <div className="w-[33.3%]">
                  <PrismicRichText components={components} field={item.content} />
                  <Button field={item.content_link} className="mb-8 md:mb-8">
                    {item.content_link_text}
                  </Button>
                </div>
              </div>
          ))}
        </div>
      </Bounded>
  );
};

export default Content;
