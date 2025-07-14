import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import Bounded from "../../components/Bounded";
import Button from "../../components/Button";
import IconButton from "../../components/IconButton";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react/src/PrismicRichText";

const components: JSXMapSerializer = {
  heading2: ({children})=>(
      <Heading as="h2" size="xl" className="leading-none font-bold mb-4 md:mb-8">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="text-1 font-normal font-body mb-4 md:mb-8">{children}</p>
  )
}

/**
 * Props for `Contact`.
 */
export type ContactProps = SliceComponentProps<Content.ContactSlice>;

/**
 * Component for "Contact" Slices.
 */
const Contact: FC<ContactProps> = ({ slice }) => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="grid grid-cols-1 border-b-1 leading-1 pb-0">
          <PrismicRichText field={slice.primary.title} components={components}/>
          <PrismicRichText field={slice.primary.content} components={components}/>
          <div className="mb-8 md:mb-8 flex gap-4">
            <PrismicNextImage field={slice.primary.email_link_image} className="w-[20px] h-[16px]" />
            <a href={"mailto:" + slice.primary.email_link_text} className="btn">{slice.primary.email_link_text}</a>
          </div>

          <div className="mb-8 md:mb-8 flex gap-4">
            <IconButton field={slice.primary.linkedin_link} className="">
              <PrismicNextImage field={slice.primary.linkedin_link_image} className="w-[20px] h-[20px]" />
            </IconButton>
            <div className="flex items-center">
              <Button field={slice.primary.linkedin_link} className="">
                {slice.primary.linkedin_link_text}
              </Button>
            </div>
          </div>
        </div>
      </Bounded>
  );
};

export default Contact;
