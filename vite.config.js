import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';
import path from 'path';

export default defineConfig({
    plugins: [
        babel()
    ],

    resolve: {
		alias: {
			// pre-configured aliases, change them freely!
			'~': __dirname,
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
