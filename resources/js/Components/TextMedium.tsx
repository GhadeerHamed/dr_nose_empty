import React from "react";
import {InertiaLinkProps} from "@inertiajs/react";

export default function TextMedium(
    {
        children,
        className = ""
    }: InertiaLinkProps) {
    return (
        <p
            className={`text-color[#282828] ` + className}>
            {children}
        </p>
    );
}
