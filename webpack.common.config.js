const path = require('path');

module.exports = {
  entry: './src/Main.js',
  output: {
    filename: 'svs-home.bundle.js',
    path: path.resolve(__dirname, 'public')
  },
  devServer: {
    contentBase: './public',
    port: 8080
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          'file-loader'
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react']
          }
        }
      }
    ]
  }
};