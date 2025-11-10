import React from "react";
import {InertiaLinkProps} from "@inertiajs/react";

export default function SectionCard(
    {
        children,
        backgroundImage = '',
        paleteal = false,
        className = ""
    }: InertiaLinkProps & { backgroundImage?: string, paleteal?: boolean }) {
    const style = {
        backgroundColor: paleteal ? "var(--color-paleteal)" : "var(--color-primary-bg)",
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
    };

    return (
        <section
            style={style}
            className={`w-full py-12 px-6 rounded-2xl shadow-sm h-[700px] px-[40px] ${className}`}
        >
            <div className="max-w-6xl mx-auto">{children}</div>
        </section>
    );
}
