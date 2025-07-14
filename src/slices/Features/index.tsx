import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "../../components/Bounded";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react/src/PrismicRichText";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading as="h2" size="md" className="text-center mb-12">{children}</Heading>
  ),
  heading3: ({children}) => (
      <Heading as="h3" size="sm" className="mb-3 font-medium sm:text-left text-center">{children}</Heading>
  ),
  paragraph: ({children}) => (
      <p className="text-base font-medium font-body text-slate-600 sm:text-left text-center">{children}</p>
  )
}

/**
 * Props for `Features`.
 */
export type FeaturesProps = SliceComponentProps<Content.FeaturesSlice>;

/**
 * Component for "Features" Slices.
 */
const Features: FC<FeaturesProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText components={components} field={slice.primary.heading}/>
      <div className="grid sm:grid-cols-2 max-w-5xl gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
        {slice.primary.feature_item.map((item, index) => (
            // <div key={index} className="max-w-xs grid sm:place-items-start place-items-center">
            <div key={index} className="max-w-xl grid sm:place-items-start place-items-center">
              <PrismicNextImage alt={item.data.image.title} field={item.image} />
              <PrismicRichText components={components} field={item.title} />
              <PrismicRichText components={components} field={item.description} />
              <PrismicNextLink field={item.link} />
              {item.link_text}
            </div>
        ))}
      </div>
    </Bounded>
  );
};

export default Features;
