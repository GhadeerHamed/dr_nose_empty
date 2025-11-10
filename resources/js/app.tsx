import './bootstrap';
import '../css/app.css';

import { hydrateRoot } from 'react-dom/client'; // Use hydrateRoot for SSR
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'Laravel';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        hydrateRoot(el, <App {...props} />);
    },
    // Progress is optional
});
