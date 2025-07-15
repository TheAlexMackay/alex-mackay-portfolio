import { createClient } from "../prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "../components/Bounded";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings")
    return <Bounded as="header" className="py-4 md:py-6 lg:py-8 px-4 md:px-6">
        <div className="flex gap-4 sm:items-center justify-between flex-col sm:flex-row flex-wrap">
            <Link href="/">{settings.data.site_title}</Link>
            <nav>
                <ul className="flex gap-4">
                    {settings.data.navigation.map((item)=>(
                        <li key={item.navigation_label}>
                            {/*<PrismicNextLink field={item.navigation_link} className="p-3 font-display font-bold hover:bg-[#191A1E] transition-color duration-250*/}
            {/*ease-in-out py-3 px-6 rounded-xl">{item.navigation_label}</PrismicNextLink>*/}
                            {item.navigation_link && (
                                <PrismicNextLink field={item.navigation_link} className="btn -nav-button">{item.navigation_label}</PrismicNextLink>
                            )}
                            {!item.navigation_link && (
                                <button className="btn -nav-button || js-scroll-animation">{item.navigation_label}</button>
                            )}
                            {/*<PrismicNextLink field={item.navigation_link} className="btn -nav-button">{item.navigation_label} {item.navigation_link.url}</PrismicNextLink>*/}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    </Bounded>
}