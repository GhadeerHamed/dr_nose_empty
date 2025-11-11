import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { route } from "ziggy-js";
const Ziggy = { "url": "http://localhost", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "home": { "uri": "{locale}", "methods": ["GET", "HEAD"], "wheres": { "locale": "en|ar" }, "parameters": ["locale"] }, "about": { "uri": "{locale}/about", "methods": ["GET", "HEAD"], "wheres": { "locale": "en|ar" }, "parameters": ["locale"] }, "services": { "uri": "{locale}/services", "methods": ["GET", "HEAD"], "wheres": { "locale": "en|ar" }, "parameters": ["locale"] }, "results": { "uri": "{locale}/results", "methods": ["GET", "HEAD"], "wheres": { "locale": "en|ar" }, "parameters": ["locale"] }, "appointment": { "uri": "{locale}/appointment", "methods": ["GET", "HEAD"], "wheres": { "locale": "en|ar" }, "parameters": ["locale"] }, "profile.edit": { "uri": "profile", "methods": ["GET", "HEAD"] }, "profile.update": { "uri": "profile", "methods": ["PATCH"] }, "profile.destroy": { "uri": "profile", "methods": ["DELETE"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.store": { "uri": "reset-password", "methods": ["POST"] }, "verification.notice": { "uri": "verify-email", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "verify-email/{id}/{hash}", "methods": ["GET", "HEAD"], "parameters": ["id", "hash"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "password.confirm": { "uri": "confirm-password", "methods": ["GET", "HEAD"] }, "password.update": { "uri": "password", "methods": ["PUT"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-CfA-c38d.js") });
      return pages[`./Pages/${name}.tsx`]();
    },
    setup: ({ App, props }) => {
      global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
