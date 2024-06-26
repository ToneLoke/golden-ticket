const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootWebpackConfig = require('../../webpack.config');

module.exports = {
  ...rootWebpackConfig,
  entry: {
    main: require.resolve('./src/index.tsx'),
  },
  output: {
    path: path.join(__dirname, 'umd'),
    libraryTarget: 'umd',
  },
  plugins: [
    ...rootWebpackConfig.plugins,
    new HtmlWebpackPlugin({
      title: 'PlutoTV',
      template: './public/index.html',
    }),
  ],
};
