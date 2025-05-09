import { createClient } from "../prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";
import Bounded from '../components/Bounded'

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings")
    return <Bounded as="footer">
        <div className="flex sm:flex-row flex-col justify-between items-center gap-6">
            <Link href="/">{settings.data.site_title}</Link>
            <ul>
                {settings.data.navigation.map((item)=>(
                    <li key={item.navigation_label}>
                        <PrismicNextLink field={item.navigation_link} className="p-3">{item.navigation_label}</PrismicNextLink>
                    </li>
                ))}
            </ul>
            <p>Email link</p>
            <p>Linkedin link</p>
        </div>
    </Bounded>
}