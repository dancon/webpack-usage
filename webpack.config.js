module.exports = {
  context: __dirname + '/app',
  entry: {
    page1: './page',
    page2: ['./entry', './otherEntry']
  },
  output: {
    path: __dirname + '/dist',
    publicPath: '/static/',
    filename: '[name]_bundle.js',
    sourceMapFilename: '[file]-[id].map'
  }
}