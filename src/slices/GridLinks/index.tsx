import { FC } from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import { PrismicNextImage } from "@prismicio/next";
import { PrismicRichText } from "@prismicio/react";
import Bounded from "../../components/Bounded";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react/src/PrismicRichText";
import { createClient } from "../../prismicio";
import { isFilled } from "@prismicio/client";
import clsx from "clsx";

const components: JSXMapSerializer = {
  heading2: ({children})=>(
      <Heading as="h2" size="xl" className="leading-none mb-8">{children}</Heading>
  ),
  paragraph: ({children})=>(
      <p className="mb-8">{children}</p>
  )
}

/**
 * Props for `GridLinks`.
 */
export type GridLinksProps = SliceComponentProps<Content.GridLinksSlice>;

/**
 * Component for "GridLinks" Slices.
 */
const GridLinks: FC<GridLinksProps> = ({ slice }) => {
  return (
      <Bounded
          data-slice-type={slice.slice_type}
          data-slice-variation={slice.variation}
      >
        <div className="border-b-1 border-white grid grid-cols-1 gap-x-8 gap-y-12 mx-auto sm:place-items-start place-items-center">
          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-16 w-[100%]">
            {slice.primary.grid_item.map((item, index) => (
                <div key={index} className="logo__image mb-16">
                  <div className="pb-8 mb-8 border-b-1 border-white">
                    <div className=" aspect-2/1 relative">
                      <picture className="image-container absolute top-0 bottom-0 left-0">
                        <PrismicNextImage alt={item.image.title} field={item.image} className="w-full h-full object-contain"
                                          imgixParams={{ar: "2:1", fit: "cover"}}/>
                      </picture>
                    </div>
                  </div>
                  <div className="mb-8 md:mb-8">
                    <PrismicRichText components={components} field={item.description}/>
                  </div>
                  <Button field={item.link} className="mb-8 md:mb-8">
                    {item.link_text}
                  </Button>
                </div>
            ))}
          </div>
        </div>
      </Bounded>
  );
};

export default GridLinks;
