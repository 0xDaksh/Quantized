var fs = require('fs'),
  { createBundleRenderer } = require('vue-server-renderer'),
  path = require('path'),
  resolve = file => path.resolve(__dirname, file),
  template = fs.readFileSync(resolve('../assets/index.template.html'), 'utf-8'),
  LRU = require('lru-cache')

let createRenderer = (bundle, options) => {
  // https://github.com/vuejs/vue/blob/dev/packages/vue-server-renderer/README.md#why-use-bundlerenderer
  return createBundleRenderer(bundle, Object.assign(options, {
    template,
    // for component caching
    cache: LRU({
      max: 1000,
      maxAge: 1000 * 60 * 15
    }),
    // this is only needed when vue-server-renderer is npm-linked
    basedir: resolve('./public'),
    // recommended for performance
    runInNewContext: false
  }))
}

module.exports = createRenderer