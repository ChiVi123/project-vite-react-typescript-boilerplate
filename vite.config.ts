import react from '@vitejs/plugin-react-swc';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: [
            { find: '~css', replacement: '/src/assets/css' },
            { find: '~icon', replacement: '/src/assets/icon' },
            { find: '~svg', replacement: '/src/assets/svg' },
            { find: '~components', replacement: '/src/components' },
            { find: '~config', replacement: '/src/config' },
            { find: '~core', replacement: '/src/core' },
            { find: '~helpers', replacement: '/src/helpers' },
            { find: '~layouts', replacement: '/src/layouts' },
            { find: '~libs', replacement: '/src/libs' },
            { find: '~entities', replacement: '/src/modules/entities' },
            { find: '~repositories', replacement: '/src/modules/repositories' },
            { find: '~types', replacement: '/src/types' },
            { find: '~utils', replacement: '/src/utils' },
            { find: '~view', replacement: '/src/view' },
        ],
    },
});
