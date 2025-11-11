import React from "react";
import {InertiaLinkProps} from "@inertiajs/react";

export default function TitleLarge(
    {
        children,
        className = ""
    }: InertiaLinkProps) {
    return (
        <p
            className={`text-color[#141414] font-bold text-[28px] ` + className}>
            {children}
        </p>
    );
}
