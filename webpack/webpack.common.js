const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
   entry: path.resolve(__dirname, '../src/index.jsx'),
   module: {
      rules: [
         {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: ['babel-loader'],
         },
         {
            test: /\.(css)$/,
            use: ['style-loader', 'css-loader']
         },
      ],
   },
   resolve: {
      extensions: ['*', '.js', '.jsx'],
   },
   output: {
      path: path.resolve(__dirname, '../build'),
      filename: 'bundle.js',
   },
   plugins: [
      new HtmlWebpackPlugin({
         template: path.resolve(__dirname, '../public/index.html'),
      }),
   ]
};
