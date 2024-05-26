import { resolve } from 'path';
import handlebars from 'vite-plugin-handlebars';
import { singleFile } from 'vite-plugin-singlefile';
export default {
    plugins: [
        handlebars({
            partialDirectory: resolve(__dirname, 'components/vi'),
        }),
        singleFile()
    ],
};