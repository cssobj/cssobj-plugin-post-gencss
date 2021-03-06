// rollup.config.js

export default {
  entry: 'src/cssobj-plugin-gencss.js',
  moduleName: 'cssobj_plugin_gencss',
  amd: {id: 'cssobj_plugin_gencss'},
  targets: [
    { format: 'iife', dest: 'dist/cssobj-plugin-gencss.iife.js' },
    { format: 'amd',  dest: 'dist/cssobj-plugin-gencss.amd.js'  },
    { format: 'umd',  dest: 'dist/cssobj-plugin-gencss.umd.js'  },
    { format: 'cjs',  dest: 'dist/cssobj-plugin-gencss.cjs.js'  },
    { format: 'es',   dest: 'dist/cssobj-plugin-gencss.es.js'   }
  ]
}
