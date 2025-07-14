import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading as="h2" size="xl" className="mb-8 font-semibold">{children}</Heading>
  ),
  paragraph: ({children}) => (
      <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">{children}</p>
  )
}

/**
 * Props for `Info`.
 */
export type InfoProps = SliceComponentProps<Content.InfoSlice>;

/**
 * Component for "Info" Slices.
 */
const Info: FC<InfoProps> = ({ slice }) => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        {/*<div className="grid sm:grid-cols-2 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">*/}
        <div className="border-b-1 border-white grid grid-cols-1 gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
          {slice.primary.info_item.map((item, index) => (
              // <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">

              // slice.variation === "smallHeading" &&
              <div key={index} className="flex gap-4 w-[100%]">
                <div className="w-[66.6%]">
                  <PrismicRichText components={components} field={item.heading} />
                  <PrismicRichText components={components} field={item.subheading} />
                </div>
                <div className="w-[33.3%]">
                  <PrismicRichText components={components} field={item.info} />
                </div>
              </div>
          ))}
        </div>
      </Bounded>
  );
};

export default Info;
