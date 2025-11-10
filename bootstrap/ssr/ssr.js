import { jsx } from "react/jsx-runtime";
import { createInertiaApp } from "@inertiajs/react";
import createServer from "@inertiajs/react/server";
import ReactDOMServer from "react-dom/server";
import { route } from "ziggy-js";
const Ziggy = { "url": "http://localhost", "port": null, "defaults": {}, "routes": { "sanctum.csrf-cookie": { "uri": "sanctum/csrf-cookie", "methods": ["GET", "HEAD"] }, "locale.switch": { "uri": "locale/{locale}", "methods": ["GET", "HEAD"], "parameters": ["locale"] }, "home": { "uri": "/", "methods": ["GET", "HEAD"] }, "about": { "uri": "about", "methods": ["GET", "HEAD"] }, "services": { "uri": "services", "methods": ["GET", "HEAD"] }, "results": { "uri": "results", "methods": ["GET", "HEAD"] }, "appointment": { "uri": "appointment", "methods": ["GET", "HEAD"] }, "profile.edit": { "uri": "profile", "methods": ["GET", "HEAD"] }, "profile.update": { "uri": "profile", "methods": ["PATCH"] }, "profile.destroy": { "uri": "profile", "methods": ["DELETE"] }, "register": { "uri": "register", "methods": ["GET", "HEAD"] }, "login": { "uri": "login", "methods": ["GET", "HEAD"] }, "password.request": { "uri": "forgot-password", "methods": ["GET", "HEAD"] }, "password.email": { "uri": "forgot-password", "methods": ["POST"] }, "password.reset": { "uri": "reset-password/{token}", "methods": ["GET", "HEAD"], "parameters": ["token"] }, "password.store": { "uri": "reset-password", "methods": ["POST"] }, "verification.notice": { "uri": "verify-email", "methods": ["GET", "HEAD"] }, "verification.verify": { "uri": "verify-email/{id}/{hash}", "methods": ["GET", "HEAD"], "parameters": ["id", "hash"] }, "verification.send": { "uri": "email/verification-notification", "methods": ["POST"] }, "password.confirm": { "uri": "confirm-password", "methods": ["GET", "HEAD"] }, "password.update": { "uri": "password", "methods": ["PUT"] }, "logout": { "uri": "logout", "methods": ["POST"] }, "storage.local": { "uri": "storage/{path}", "methods": ["GET", "HEAD"], "wheres": { "path": ".*" }, "parameters": ["path"] } } };
if (typeof window !== "undefined" && typeof window.Ziggy !== "undefined") {
  Object.assign(Ziggy.routes, window.Ziggy.routes);
}
createServer(
  (page) => createInertiaApp({
    page,
    render: ReactDOMServer.renderToString,
    resolve: (name) => {
      const pages = /* @__PURE__ */ Object.assign({ "./Pages/Auth/ConfirmPassword.tsx": () => import("./assets/ConfirmPassword-YTEtB5vx.js"), "./Pages/Auth/ForgotPassword.tsx": () => import("./assets/ForgotPassword-CKiSgbmG.js"), "./Pages/Auth/Login.tsx": () => import("./assets/Login-BakPG1lP.js"), "./Pages/Auth/Register.tsx": () => import("./assets/Register-jwWUyHVr.js"), "./Pages/Auth/ResetPassword.tsx": () => import("./assets/ResetPassword-KbVvxPdy.js"), "./Pages/Auth/VerifyEmail.tsx": () => import("./assets/VerifyEmail-Bs3sxQVm.js"), "./Pages/Dashboard.tsx": () => import("./assets/Dashboard-CloDrX3u.js"), "./Pages/Profile/Edit.tsx": () => import("./assets/Edit-CegIr5Ue.js"), "./Pages/Profile/Partials/DeleteUserForm.tsx": () => import("./assets/DeleteUserForm-D446_gTH.js"), "./Pages/Profile/Partials/UpdatePasswordForm.tsx": () => import("./assets/UpdatePasswordForm-DBo2DQJ2.js"), "./Pages/Profile/Partials/UpdateProfileInformationForm.tsx": () => import("./assets/UpdateProfileInformationForm-CiBEo-0-.js"), "./Pages/Welcome.tsx": () => import("./assets/Welcome-DE1RzSPL.js") });
      return pages[`./Pages/${name}.tsx`]();
    },
    setup: ({ App, props }) => {
      global.route = (name, params, absolute, config = Ziggy) => route(name, params, absolute, config);
      return /* @__PURE__ */ jsx(App, { ...props });
    }
  })
);
