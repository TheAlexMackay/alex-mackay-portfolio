import { createClient } from "../prismicio";
import { PrismicNextLink } from "@prismicio/next";
import Link from "next/link";

export default async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings")
    return <footer>
        <Link href="/">{settings.data.site_title}</Link>
        <ul>
            {settings.data.navigation.map((item)=>(
                <li key={item.navigation_label}>
                    <PrismicNextLink field={item.navigation_link}>{item.navigation_label}</PrismicNextLink>
                </li>
            ))}
        </ul>
        <p>Email link</p>
        <p>Linkedin link</p>
    </footer>
}