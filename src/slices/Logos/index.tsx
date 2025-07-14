// 'use client';
// import React, {FC, useEffect} from "react";
import React, {FC} from "react";
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

const components: JSXMapSerializer = {
    heading2: ({children}) => (
        <Heading as="h2" size="xl" className="mb-8 font-semibold">{children}</Heading>
    ),
    paragraph: ({children}) => (
        <p className="text-xl md:text-2xl font-normal font-body text-slate-600 mb-8">{children}</p>
    )
}

/**
 * Props for `Logos`.
 */
export type LogosProps = SliceComponentProps<Content.LogosSlice>;

/**
 * Component for "Logos" Slices.
 */
const Logos: FC<LogosProps> = async ({ slice }: LogosProps): Promise<JSX.Element> => {

    // console.log(slice.primary.testimonial_item)

    const client = createClient();
    const logos = await Promise.all(
        slice.primary.logo_item.map((item) => {
            if (
                isFilled.contentRelationship(item.company) && item.company.uid
            ) {
                return client.getByUID("company", item.company.uid)
            }
        })
    )

    const logosSmall = await Promise.all(
        slice.primary.logo_item_small.map((item) => {
            if (
                isFilled.contentRelationship(item.company) && item.company.uid
            ) {
                return client.getByUID("company", item.company.uid)
            }
        })
    )

    // runOutputSvg()
    // useEffect(() => { runOutputSvg() }, [] )

    return (
        <Bounded
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <PrismicRichText components={components} field={slice.primary.heading} />
            <div className="border-b-1 pb-8">
                <div className="big-logos grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-32 gap-y-0 pb-16">
                    {logos.map((item, index) => item && (
                        // <div key={index} className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
                        <div key={index} className="aspect-2/1 relative">
                            <PrismicNextLink className="js-logo-container w-[100%] h-[100%]" field={item.data.link}>
                                <picture className="logo-image absolute top-0 bottom-0 right-0 left-0 || js-image-logo">
                                    <PrismicNextImage alt={item.data.image.title} field={item.data.image} className="w-full h-full object-contain"
                                                      imgixParams={{ar: "2:1", fit: "cover"}}/>
                                </picture>
                                <div className="w-[100%] h-[100%] || js-svg-logo">{item.data.image.url}</div>
                            </PrismicNextLink>
                        </div>
                    ))}
                </div>
                <div className="grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-16 pb-8">
                    {logosSmall.map((item, index) => item && (
                        // <div key={index} className="border bg-white shadow-lg rounded-lg px-8 md:px-14 py-10 md:py-16 grid content-between">
                        <div key={index} className="aspect-2/1 relative">
                            {/*<picture className="absolute top-0 bottom-0 left-0">*/}
                            {/*    <PrismicNextImage alt={item.data.image.title} field={item.data.image} className="w-full h-full object-contain"*/}
                            {/*                      imgixParams={{ar: "2:1", fit: "cover"}}/>*/}
                            {/*</picture>*/}
                            <PrismicNextLink className="js-logo-container w-[100%] h-[100%]" field={item.data.link}>
                                <picture className="logo-image absolute top-0 bottom-0 right-0 left-0 || js-image-logo">
                                    <PrismicNextImage alt={item.data.image.title} field={item.data.image} className="w-full h-full object-contain"
                                                      imgixParams={{ar: "2:1", fit: "cover"}}/>
                                </picture>
                                <div className="w-[100%] h-[100%] || js-svg-logo -small">{item.data.image.url}</div>
                            </PrismicNextLink>
                        </div>
                    ))}
                </div>
                <div className="flex gap-8 flex-col md:flex-row">
                    <Button field={slice.primary.link}>
                        {slice.primary.link_text}
                    </Button>
                </div>
            </div>

        </Bounded>
    );
};

export default Logos;

