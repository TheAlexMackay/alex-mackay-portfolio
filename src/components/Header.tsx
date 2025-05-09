import { createClient } from "../prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from "../components/Bounded";

export default async function Header() {
    const client = createClient();
    const settings = await client.getSingle("settings")
    return <Bounded as="header" className="py-4 md:py-6 lg:py-8">
        <div className="flex gap-4 items-center justify-between sm:flex-row flex-col">
            <Link href="/">{settings.data.site_title}</Link>
            <nav>
                <ul className="flex">
                    {settings.data.navigation.map((item)=>(
                        <li key={item.navigation_label}>
                            <PrismicNextLink field={item.navigation_link} className="p-3">{item.navigation_label}</PrismicNextLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </div>

    </Bounded>
}