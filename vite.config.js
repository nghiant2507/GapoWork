import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';

export default {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'components'),
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                vi: resolve(__dirname, 'index.html'),
                en: resolve(__dirname, 'en.html'),
            },
        },
    },
};
