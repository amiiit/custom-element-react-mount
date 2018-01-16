import webpack from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import path from 'path'

const runExamples = process.env.EXAMPLES === 'true';
const entry = {
  'custom-element-react-mount': './src/custom-element-react-mount.jsx',
}
if (runExamples) {
  Object.assign(entry,{
    app: './examples/app.jsx',
    'my-custom-element': './examples/my-custom-element.js'
  })
}

export default {
  entry,
  output: {
    path: path.resolve(__dirname, 'lib/'),
    filename: '[name].js',
  },
  resolve: {
    // Add `.ts` and `.tsx` as a resolvable extension.
    extensions: ['.jsx', '.js'], // note if using webpack 1 you'd also need a '' in the array as well
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: ['babel-loader'],
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
  devtool: 'eval-source-map',
}
