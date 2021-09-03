const { VanillaExtractPlugin } = require('@vanilla-extract/webpack-plugin');
const { getGlobalCssLoader } = require('next/dist/build/webpack/config/blocks/css/loaders');
const { default: MiniCssExtractPlugin } = require('next/dist/compiled/mini-css-extract-plugin/index');

module.exports = {
  webpack5: true,
  webpack(config, options) {
    const { dev, isServer } = options;

    config.module.rules[config.module.rules.length - 1].oneOf.unshift({
      test: /\.vanilla\.css$/i,
      sideEffects: true,
      use: dev
        ? getGlobalCssLoader(
          {
            assetPrefix: config.assetPrefix,
            future: { webpack5: true },
            isClient: !isServer,
            isServer,
            isDevelopment: dev,
          },
          [],
          []
        )
        : [MiniCssExtractPlugin.loader, require.resolve('next/dist/compiled/css-loader/cjs')],
    });

    config.plugins.push(new VanillaExtractPlugin());

    if (!dev) {
      config.plugins.push(
        new MiniCssExtractPlugin({
          filename: 'static/css/[contenthash].css',
          chunkFilename: 'static/css/[contenthash].css',
          ignoreOrder: true,
        })
      );
    }

    return config;
  },
};
