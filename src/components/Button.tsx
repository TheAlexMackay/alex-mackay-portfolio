import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";
// import { PrismicNextLink } from "@prismicio/next";

export default function Button({...restProps}: PrismicNextLinkProps){
    return(
        // <PrismicNextLink class="btn" className="block w-fit hover:bg-cyan-800 transition-color duration-250
        //     ease-in-out rounded-xl font-display text-white font-bold text-base mb-8 md:mb-10 last:mb-0"
        //     {...restProps}
        // />
        <PrismicNextLink className="btn"
                     {...restProps}
        />
    )
}



