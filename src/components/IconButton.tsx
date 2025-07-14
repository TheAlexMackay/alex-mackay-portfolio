import { PrismicNextLink, PrismicNextLinkProps } from "@prismicio/next";

export default function IconButton({...restProps}: PrismicNextLinkProps){
    return(
        <PrismicNextLink className="btn icon-btn"
                     {...restProps}
        />
    )
}



