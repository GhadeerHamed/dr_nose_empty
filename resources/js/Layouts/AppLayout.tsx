// resources/js/Layouts/AppLayout.jsx (Simplified and cleaner)

import Navbar from "@/Components/NavBar";
import {Head, InertiaLinkProps, usePage} from "@inertiajs/react";
import {PageProps} from "@/types";

export default function AppLayout({children, title} : InertiaLinkProps & {title: string}) {
    const {props} = usePage<PageProps>();
    const {appName, appUrl, locale , description, image, canonical} = props;

    const metaTitle = `${title} - ${appName}`;
    const metaDescription = description;
    const metaImage = image || `${appUrl}/assets/default-og.jpg`;

    return (
        <>
            <Head>
                {/* Ensure HTML lang is set */}
                <html lang={locale}/>
                <title>{metaTitle}</title>

                <meta head-key="description" name="description" content={metaDescription}/>
                <meta head-key="robots" name="robots" content="index, follow"/>

                <meta property="og:title" content={metaTitle} head-key="og:title"/>
                <meta property="og:description" content={metaDescription} head-key="og:description"/>
                <meta property="og:image" content={metaImage} head-key="og:image"/>
                <meta property="og:url" content={canonical} head-key="og:url"/>
                <meta property="og:type" content="website" head-key="og:type"/>

                <meta name="twitter:title" content={metaTitle} head-key="twitter:title"/>
                <meta name="twitter:description" content={metaDescription} head-key="twitter:description"/>
                <meta name="twitter:image" content={metaImage} head-key="twitter:image"/>
                <meta name="twitter:card" content="summary_large_image" head-key="twitter:card"/>

                <link rel="alternate" hrefLang="en" href={`${appUrl}/en`}/>
                <link rel="alternate" hrefLang="ar" href={`${appUrl}/ar`}/>

                <link rel="canonical" href={canonical} head-key="canonical"/>
            </Head>
            <div className="min-h-screen">
                <Navbar/>

                <main>{children}</main>
            </div>
        </>
    );
}

