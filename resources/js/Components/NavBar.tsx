import React from "react";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
import NavLink from "@/Components/NavLink";

export default function Navbar() {
    const { props } = usePage();
    const currentLocale = props.locale || "ar"; // passed from Laravel middleware
    const [menuOpen, setMenuOpen] = useState(false);

    const isArabic = currentLocale === "ar";

    const switchLocale = () => {
        const newLocale = isArabic ? "en" : "ar";
        window.location.href = route("locale.switch", newLocale);
    };

    const links = [
        { name: "home", href: route("home"), label: isArabic ? "الرئيسية" : "Home" },
        { name: "services", href: route("services"), label: isArabic ? "خدماتي" : "Services" },
        { name: "results", href: route("results"), label: isArabic ? "عرض النتائج" : "Results" },
        { name: "about", href: route("about"), label: isArabic ? "عنّي" : "About" },
    ];

    return (
        <nav
            className={`w-full bg-white shadow-sm py-4 ${
                isArabic ? "text-right" : "text-left"
            }`}
            dir={isArabic ? "rtl" : "ltr"}
        >
            <div className="container w-auto mx-10 flex justify-between items-center px-4">
                {/* Logo */}
                <Link href={route("home")} className="text-xl font-bold text-gray-800">
                    {isArabic ? "الدكتور أحمد نزار محمد" : "Dr. Ahmad Nizar Mohammed"}
                </Link>

                {/* Desktop Menu */}
                <ul className="hidden md:flex gap-6 items-center">
                    {links.map((link) => (
                        <li key={link.href}>
                            <NavLink
                                href={link.href}
                                active={route().current(link.name)}
                            >
                                {link.label}
                            </NavLink>
                        </li>
                    ))}
                    <li>
                        <a
                            className={"text-sm text-gray-600 hover:text-teal-700 cursor-pointer"}
                            onClick={switchLocale} >
                            {isArabic ? "EN" : "عربي"}
                        </a>

                    </li>
                    <li>
                        <Link
                            href={route("appointment")}
                            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition"
                        >
                            {isArabic ? "احجز موعد" : "Book Now"}
                        </Link>
                    </li>
                </ul>

                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-gray-700 focus:outline-none"
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="md:hidden bg-white shadow mt-2">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                        >
                            {link.label}
                        </Link>

                    ))}
                    <button
                        onClick={switchLocale}
                        className="block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100"
                    >
                        {isArabic ? "EN" : "AR"}
                    </button>
                    <Link
                        href={route("appointment")}
                        className="block text-center bg-teal-600 hover:bg-teal-700 text-white m-2 py-2 rounded-full"
                    >
                        {isArabic ? "احجز موعد" : "Book Now"}
                    </Link>
                </div>
            )}
        </nav>
    );
}
