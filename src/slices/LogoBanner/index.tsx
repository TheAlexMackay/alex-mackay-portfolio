import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import BoundedHero from "../../components/BoundedHero";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react/src/PrismicRichText";

const components: JSXMapSerializer = {
  heading2: ({children}) => (
      <Heading as="h2" size="xl" className="mb-8 font-semibold">{children}</Heading>
  ),
  paragraph: ({children}) => (
      <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">{children}</p>
  )
}

/**
 * Props for `LogoBanner`.
 */
export type LogoBannerProps = SliceComponentProps<Content.LogoBannerSlice>;

/**
 * Component for "LogoBanner" Slices.
 */
const LogoBanner: FC<LogoBannerProps> = ({ slice }) => {
  return (
      <BoundedHero
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="w-[100%] pt-[120px] md:pt-[136px] lg:pt-[168px]">
          <div className="heading-wrapper">
            <div className="mx-auto w-full max-w-[1440px]">
              <div className="border-white flex gap-8 flex-col md:flex-row pb-8">
                <div className="logo-banner__image">
                  <div className="aspect-2/1 relative">
                    <picture className="absolute top-0 bottom-0 left-0">
                      <PrismicNextImage alt={slice.primary.logo.title} field={slice.primary.logo} className="w-full h-full object-contain"
                                        imgixParams={{ar: "2:1", fit: "cover"}}/>
                    </picture>
                  </div>
                </div>
                <div className="logo-banner__image -link flex md:justify-end md:items-end">
                  <Button field={slice.primary.link}>
                    {slice.primary.link_text}
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>


      </BoundedHero>
  );
};

export default LogoBanner;
