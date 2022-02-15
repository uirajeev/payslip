module.exports = {
  chainWebpack: (config) => {
    const svgRule = config.module.rule('svg')

    svgRule.uses.clear()

    svgRule
      .use('vue-loader-v16')
      .loader('vue-loader-v16')
      .end()
      .use('vue-svg-loader')
      .loader('vue-svg-loader')

    config.module.rule('pdf')
      .test(/\.(pdf)(\?.*)?$/)
      .use('file-loader')
      .loader('file-loader')
      .options({
        name: 'assets/pdf/[name].[hash:8].[ext]'
      })
  },
  css: {
    loaderOptions: {
      sass: {
        prependData: `
            @import "@/scss/global/variables/_variables.scss";
            @import "@/scss/global/mixins/_mixins.scss";
            @import "@/scss/global/fonts/_fonts.scss";
            @import "@/scss/global/reset/_reset.scss";
          `
      }
    }
  },

  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: false,
      enableLegacy: false
    }
  }
}
