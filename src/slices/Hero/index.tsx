'use client';
import React, {FC, useEffect} from "react";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import { PrismicRichText } from "@prismicio/react";
import { PrismicNextImage } from "@prismicio/next";
import BoundedHero from "../../components/BoundedHero";
import Button from "../../components/Button";
import Heading from "../../components/Heading";
import {JSXMapSerializer} from "@prismicio/react";
import { runConsoleLog } from '../../components/animations';
import { runOutputSvg } from '../../components/rawSvg';
import "../../app/animation.css";

const components: JSXMapSerializer = {
  heading1: ({children})=>(
      // <Heading as="h1" size="xl" className="font-bold leading-none">{children}</Heading>
      <Heading as="h1" className="hero-heading animated-into-text font-bold leading-none">
        <span className="text-wrapper relative">
          <span className="line line1 opacity-0 absolute left-0 w-[2px] h-[95%] bg-white"></span>
          <span className="letters">{children}</span>
        </span>
      </Heading>
  ),
  heading2: ({children})=>(
      // <Heading as="h2" size="xl" className="leading-none">{children}</Heading>
      <Heading as="h2" className="hero-heading animated-into-text-2 leading-none">
        <span className="text-wrapper relative">
          <span className="line line1 opacity-0 absolute left-0 w-[2px] h-[95%] bg-white"></span>
          <span className="letters">{children}</span>
        </span>
      </Heading>
  ),
  paragraph: ({children})=>(
      <p className="text-1 font-normal font-body mb-1 md:mb-1 ">{children}</p>
  )
}

/**
 * Props for `Hero`.
 */
export type HeroProps = SliceComponentProps<Content.HeroSlice>;

/**
 * Component for "Hero" Slices.
 */
const Hero: FC<HeroProps> = ({ slice }) => {
  useEffect(() => { runConsoleLog() }, [] )
  useEffect(() => { runOutputSvg() }, [] )
  return (
    <>
      {slice.variation === "default" && (
          <BoundedHero
              // className="px-4 py-10 md:py-1 md:px-6 lg:py-16"
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
          >
            {/*<div className="mx-auto w-full max-w-6xl">*/}
            <div className="grid grid-cols-1 pt-[120px] md:pt-[136px] lg:pt-[168px] pb-8 || js-hero-wrapper">
              <div className="heading-wrapper">
                  <div className="mx-auto w-full max-w-[1440px] leading-1 pb-8 mb-8 md:mb-12 first:mt-0 last:mb-0">
                      <PrismicRichText field={slice.primary.heading} components={components}/>
                      <PrismicRichText field={slice.primary.subheading} components={components}/>
                  </div>
              </div>
              {((slice.primary.content.length !== 0) || (slice.primary.button_text != null)) && (
                  <div className="mx-auto w-full max-w-[1440px]">
                    <div className="border-b-1 pt-8 pb-4">
                    <PrismicRichText field={slice.primary.content} components={components}/>
                    {slice.primary.button_text != null && (
                        // <div className="mb-4 md:mb-4">
                        <div>
                          <Button field={slice.primary.button_link}>
                            {slice.primary.button_text}
                          </Button>
                        </div>
                    )}
                  </div>
                  </div>
              )}
                <div className="mx-auto w-full max-w-[1440px]">
                    <PrismicNextImage field={slice.primary.hero_image} className="drop-shadow-xl max-w-4xl w-full" />
                </div>
            </div>

            {/*</div>*/}
          </BoundedHero>
      )}
      {slice.variation === "horizontal" && (
          <BoundedHero
              // className="px-4 py-10 md:py-1 md:px-6 lg:py-16"
              data-slice-type={slice.slice_type}
              data-slice-variation={slice.variation}
          >
            {/*<div className="mx-auto w-full max-w-6xl">*/}
            <div className="grid grid-cols-1 md:grid-cols-2 place-items-center">
              <div className="grid grid-rows-[1fr,auto,auto] h-fit">
                  <div className="mx-auto w-full max-w-[1440px]">
                      <PrismicRichText field={slice.primary.heading} components={components}/>
                      <PrismicRichText field={slice.primary.content} components={components}/>
                      <div className="pt-4 mb-4 md:mb-4">
                          <Button field={slice.primary.button_link}>
                              {slice.primary.button_text}
                          </Button>
                      </div>
                  </div>
              </div>
                <div className="mx-auto w-full max-w-[1440px]">
              <PrismicNextImage field={slice.primary.hero_image} className="drop-shadow-xl max-w-4xl w-full" />
                </div>
            </div>

            {/*</div>*/}
          </BoundedHero>
        )}


    </>
  );
};

export default Hero;

