module.exports = {
  context: __dirname + '/app',
  entry: ['./entry', './otherEntry'],
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js'
  }
}