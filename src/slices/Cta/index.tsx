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
      <Heading as="h2" size="sm" className="font-semibold text-center mb-4">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="text-center text-slate-600 mb-8">{children}</p>
  )
}

/**
 * Props for `Cta`.
 */
export type CtaProps = SliceComponentProps<Content.CtaSlice>;

/**
 * Component for "Cta" Slices.
 */
const Cta: FC<CtaProps> = ({ slice }) => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <div className="max-w-4xl m-auto shadow-xl md:px-12 px-4 py-12 grid place-items-center rounded-lg bg-gradient-to-tr from-cyan-50 via-white to-emerald-50">
        <PrismicRichText field={slice.primary.heading} components={components} />
        <PrismicRichText field={slice.primary.content} components={components} />
        <Button field={slice.primary.button_link}> {slice.primary.button_text}</Button>
      </div>


    </Bounded>
  );
};

export default Cta;
