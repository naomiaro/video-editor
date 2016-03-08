var webpackConfig = {
  entry: __dirname + "/main.js",
  output: {
    path:  __dirname + "/",
    filename: 'video-editor.var.js',
    library: 'VideoEditor',
    libraryTarget: 'var'
  },
  devtool: "#cheap-module-eval-source-map",
  debug: true,
  publicPath: "/",
  stats: {
    colors: true
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
            presets: ['es2015', 'stage-0']
        }
      }
    ]
  }
};

module.exports = webpackConfig;