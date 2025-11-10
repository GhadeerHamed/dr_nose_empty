import { jsx, jsxs } from "react/jsx-runtime";
import { A as AppLayout } from "./AppLayout-ufMovhZT.js";
import { Head } from "@inertiajs/react";
import "react";
function SectionCard({
  children,
  backgroundImage = "",
  paleteal = false,
  className = ""
}) {
  const style = {
    backgroundColor: paleteal ? "var(--color-paleteal)" : "var(--color-primary-bg)",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
    backgroundSize: "cover",
    backgroundPosition: "center"
  };
  return /* @__PURE__ */ jsx(
    "section",
    {
      style,
      className: `w-full py-12 px-6 rounded-2xl shadow-sm h-[700px] px-[40px] ${className}`,
      children: /* @__PURE__ */ jsx("div", { className: "max-w-6xl mx-auto", children })
    }
  );
}
function TitleLarge({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: `text-color[#141414] font-bold text-[28px] ` + className,
      children
    }
  );
}
function TextMedium({
  children,
  className = ""
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      className: `text-color[#282828] ` + className,
      children
    }
  );
}
function Dashboard() {
  return /* @__PURE__ */ jsxs(AppLayout, { children: [
    /* @__PURE__ */ jsx(Head, { title: "Dashboard" }),
    /* @__PURE__ */ jsx(SectionCard, { children: /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-tealbrand", children: "Our Services" }) }),
    /* @__PURE__ */ jsx(SectionCard, { paleteal: true, children: /* @__PURE__ */ jsxs("div", { className: "text-center w-[800px] m-auto gap-[8px]", children: [
      /* @__PURE__ */ jsx(TitleLarge, { children: "خدماتي المقدمة في تجميل الأنف" }),
      /* @__PURE__ */ jsx(TextMedium, { children: "جميع الخدمات التي تخص تجميل الأنف من استشارات، حجز مواعيد، متابعة حالات والتواصل تتم عبر أرقامنا على واتساب مع الطاقم الطبي المختص أو الدكتور أحمد نزار محمد شخصياًً" })
    ] }) })
  ] });
}
export {
  Dashboard as default
};
