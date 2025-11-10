import { jsx, jsxs } from "react/jsx-runtime";
import { Link, usePage } from "@inertiajs/react";
import { useState } from "react";
function NavLink({
  active = false,
  className = "",
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Link,
    {
      ...props,
      className: "inline-flex items-center px-1 pt-1 text-sm font-medium leading-5 duration-150 ease-in-out focus:outline-none text-gray-700 hover:text-tealbrand transition" + (active ? "border-indigo-400  border-b focus:border-indigo-700 font-semibold text-tealbrand" : "border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 focus:border-gray-300 focus:text-gray-700") + className,
      children
    }
  );
}
function Navbar() {
  const { props } = usePage();
  const currentLocale = props.locale || "ar";
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
    { name: "about", href: route("about"), label: isArabic ? "عنّي" : "About" }
  ];
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      className: `w-full bg-white shadow-sm py-4 ${isArabic ? "text-right" : "text-left"}`,
      dir: isArabic ? "rtl" : "ltr",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "container w-auto mx-10 flex justify-between items-center px-4", children: [
          /* @__PURE__ */ jsx(Link, { href: route("home"), className: "text-xl font-bold text-gray-800", children: isArabic ? "الدكتور أحمد نزار محمد" : "Dr. Ahmad Nizar Mohammed" }),
          /* @__PURE__ */ jsxs("ul", { className: "hidden md:flex gap-6 items-center", children: [
            links.map((link) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              NavLink,
              {
                href: link.href,
                active: route().current(link.name),
                children: link.label
              }
            ) }, link.href)),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              "a",
              {
                className: "text-sm text-gray-600 hover:text-teal-700 cursor-pointer",
                onClick: switchLocale,
                children: isArabic ? "EN" : "عربي"
              }
            ) }),
            /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
              Link,
              {
                href: route("appointment"),
                className: "bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full transition",
                children: isArabic ? "احجز موعد" : "Book Now"
              }
            ) })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMenuOpen(!menuOpen),
              className: "md:hidden text-gray-700 focus:outline-none",
              children: "☰"
            }
          )
        ] }),
        menuOpen && /* @__PURE__ */ jsxs("div", { className: "md:hidden bg-white shadow mt-2", children: [
          links.map((link) => /* @__PURE__ */ jsx(
            Link,
            {
              href: link.href,
              className: "block px-4 py-2 text-gray-700 hover:bg-gray-100",
              children: link.label
            },
            link.href
          )),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: switchLocale,
              className: "block w-full text-left px-4 py-2 text-sm text-gray-600 hover:bg-gray-100",
              children: isArabic ? "EN" : "AR"
            }
          ),
          /* @__PURE__ */ jsx(
            Link,
            {
              href: route("appointment"),
              className: "block text-center bg-teal-600 hover:bg-teal-700 text-white m-2 py-2 rounded-full",
              children: isArabic ? "احجز موعد" : "Book Now"
            }
          )
        ] })
      ]
    }
  );
}
function AppLayout({
  header,
  children
}) {
  return /* @__PURE__ */ jsxs("div", { className: "min-h-screen", children: [
    /* @__PURE__ */ jsx(Navbar, {}),
    /* @__PURE__ */ jsx("main", { children })
  ] });
}
export {
  AppLayout as A
};
