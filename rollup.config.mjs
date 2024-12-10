import { nodeResolve } from '@rollup/plugin-node-resolve';

export default {
    input: './index.js',
    output: {
        format: 'iife',
        file: 'dist/bundle.js'
    },
    plugins: [
        nodeResolve()
    ]
};
