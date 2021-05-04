module.exports = {
  pwa: {
    themeColor: '#B28A5A',
  },
  configureWebpack: {
    devServer: {
      sockHost: '0.0.0.0',
      host: '0.0.0.0',
      port: '8080',
      sockPort: '8080',
      public: '0.0.0.0:8080',
      disableHostCheck: true,
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
    },
  },
};
