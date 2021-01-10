import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import sass from 'rollup-plugin-sass'

export default {
  input: [
    './src/index.tsx',
    './src/Button/index.tsx',
    './src/message/index.tsx',
    './src/Tooltip/index.tsx',
    './src/Modal/index.tsx',
    './src/Dropdown/index.tsx',
    './src/Input/index.tsx',
    './src/Pagination/index.tsx',
    './src/Checkbox/index.tsx',
    './src/Radio/index.tsx',
    './src/Empty/index.tsx',
    './src/Spin/index.tsx',
    './src/Table/index.tsx',
    './src/Select/index.tsx',
    './src/ConfigProvider/index.tsx',
  ],
  output: [
    {
      dir: 'dist',
      format: 'cjs',
      sourcemap: true,
    },
  ],
  external: ['classnames'],
  preserveModules: true, // Important if we want to code split
  plugins: [
    peerDepsExternal(),
    commonjs(),
    typescript({ useTsconfigDeclarationDir: true }),
    sass({
      insert: true,
    }),
  ],
}
