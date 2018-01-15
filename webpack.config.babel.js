import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const runExamples = process.env.EXAMPLES === 'true';

export default {
  entry: {
    lib: './lib/custom-element-react-mount.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist/'),
    filename: '[name].js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.ts', '.tsx', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /.tsx?$/,
        loaders: ['ts-loader'],
        exclude: /node_modules/,
      }
    ],
  },
  plugins: [
    runExamples && new HtmlWebpackPlugin({
      template: './examples/index.html',
      filename: 'index.html',
    }),
  ].filter(Boolean),
  devServer: {
    hot: true, // hot module replacement. Depends on HotModuleReplacementPlugin
  },
  devtool: 'eval-source-map',
}
