module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        'assets': '@/assets',
        'common': '@/common',
        'components': '@/components',
        'network': '@/network',
        'views': '@/views',
      }
    }
  },
  publicPath: './',
  
  devServer: {
    open: true,

    host: '127.0.0.1',

    port: 8081,

    https: false,

    hotOnly: false,

    proxy: null,

    before: app => {
    }
  },

}

