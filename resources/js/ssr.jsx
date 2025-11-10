import { createInertiaApp } from '@inertiajs/react'
import createServer from '@inertiajs/react/server'
import ReactDOMServer from 'react-dom/server'
import {route} from 'ziggy-js';
import { Ziggy } from './ziggy.jsx';

createServer((page) =>
    createInertiaApp({
        page,
        render: ReactDOMServer.renderToString,
        resolve: (name) => {
            // Adjust the path to your Pages directory if necessary
            const pages = import.meta.glob('./Pages/**/*.tsx');
            return pages[`./Pages/${name}.tsx`]();
        },
        setup: ({ App, props }) => {
            global.route = (name, params, absolute, config = Ziggy) =>
                route(name, params, absolute, config);
            return <App {...props} />;
        },
    })
);
