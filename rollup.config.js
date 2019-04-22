import typescript from 'rollup-plugin-typescript2'
const { uglify } = require('rollup-plugin-uglify')
import pkg from './package.json'

export default [
  {
    input: 'src/index.ts',
    external: [
      ...Object.keys(pkg.peerDependencies || {}),
      ...Object.keys(pkg.dependencies || {})
    ],
    plugins: [
      typescript({
        typescript: require('typescript')
      }),
      reactSvg({
        // svgo options
        svgo: {
          plugins: [], // passed to svgo
          multipass: true
        },

        // whether to output jsx
        jsx: false,

        // include: string
        include: null,

        // exclude: string
        exclude: null
      })
      // uglify()
    ],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  }
]
