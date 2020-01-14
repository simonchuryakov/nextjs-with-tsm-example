const webpack = require("webpack");

const WebpackShellPlugin = require("webpack-shell-plugin");
const withPlugins = require("next-compose-plugins");
const withSass = require("@zeit/next-sass");
const withCss = require("@zeit/next-css");

const isDevMode = process.env.NODE_ENV !== "production";

const nextConfig = {
  webpack: config => {
    if (isDevMode) {
      config.plugins.push(
        new WebpackShellPlugin({
          onBuildStart: ["yarn gen:watch"],
          dev: isDevMode
        }),
        new webpack.WatchIgnorePlugin([/scss\.d\.ts$/])
      );
    }

    return config;
  }
};

const withSassOptions = {
  cssModules: true,
  sassLoaderOptions: {
    includePaths: ["./src"]
  },
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: "[name]__[local]___[hash:base64:5]",
    namedExport: true,
    camelCase: true
  }
};

module.exports = withPlugins(
  [withCss, [withSass, withSassOptions]],
  nextConfig
);
