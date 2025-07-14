"use client"

import {useEffect, useState} from "react";
// import {createClient} from "@/prismicio";

export default function SVGImage() {
    const [svgText, setSvgText] = useState("");

    useEffect(() => {
        const fetchSVG = async () => {
            const client = createClient();
            const logos = await client.getSingle("logos");

            //Load SVG URL
            const svgResponse = await fetch(logos.item.data.image.url);
            const svgText = await svgResponse.text();

            setSvgText(svgText)
        };

        fetchSVG();
    }, []);

    return <div dangerouslySetInnerHTML={{ __html: svgText }} />;
}