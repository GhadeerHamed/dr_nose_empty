import Navbar from "@/Components/NavBar";
import {Head, usePage} from "@inertiajs/react";
import {PageProps} from "@/types";
import {PropsWithChildren} from "react";

export default function AppLayout({ children }: PropsWithChildren) {
    const { props } = usePage<PageProps>();
    const { appName,appUrl, locale = "ar",  title, description = '', image, canonical } = props;

    // Default SEO values
    const metaTitle = title || (locale === "ar" ? `${appName}| الرئيسية ` : `${appName} | Home`);
    const metaDescription = description;
    const metaImage = image || `${appUrl}/assets/default-og.jpg`;

    return (
        <>
            <Head>
                {/* Basic SEO */}
                <html lang={locale}/>
                <title>{metaTitle}</title>
                <meta key-name="description" name="description" content={metaDescription}/>
                <meta name="robots" content="index, follow"/>

                {/* OpenGraph / Facebook */}
                <meta property="og:title" content={metaTitle}/>
                <meta property="og:description" content={metaDescription}/>
                <meta property="og:image" content={metaImage}/>
                <meta property="og:url" content={canonical}/>
                <meta property="og:type" content="website"/>

                {/* Twitter */}
                <meta name="twitter:title" content={metaTitle}/>
                <meta name="twitter:description" content={metaDescription}/>
                <meta name="twitter:image" content={metaImage}/>
                <meta name="twitter:card" content="summary_large_image"/>

                {/* Multi-language */}
                <link rel="alternate" hrefLang="en" href={`${appUrl}/en`}/>
                <link rel="alternate" hrefLang="ar" href={`${appUrl}/ar`}/>

                {/* Canonical */}
                <link rel="canonical" href={canonical}/>
            </Head>
            <div className="min-h-screen">
                <Navbar/>

                <main>{children}</main>
            </div>
        </>
    );
}
