import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
    resolve: {
		alias: {
			// pre-configured aliases, change them freely!
			'~': __dirname,
			'@': path.resolve(__dirname, 'src'),
		},
	},
});
