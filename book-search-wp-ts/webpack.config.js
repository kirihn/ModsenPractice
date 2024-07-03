const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    open: true,
    hot: true,
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    //   {
    //     test: /\.(png|jpe?g|gif|svg)$/i,
    //     use: [
    //         {
    //             loader: 'file-loader',
    //             options: {
    //                 name: '[path][name].[ext]',
    //             },
    //         },
    //     ],
    // },
      {
        test: /\.scss$/,
        use: [
          'style-loader', // вставляет стили в DOM
          'css-loader', // позволяет импортировать CSS
          'sass-loader', // компилирует Sass в CSS
        ],
        exclude: /node_modules/,
      },
    ],
  },
  plugins: [
    new Dotenv(),
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'public', to: '' }
      ]
    }),
  ],
};