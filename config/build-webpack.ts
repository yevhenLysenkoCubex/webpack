import webpack from "webpack";

import type { Configuration } from "webpack-dev-server";
import { buildDevserver } from "./build-dev-server";
import { buildLoaders } from "./build-loaders";
import { buildPlugins } from "./build-plugins";
import { buildResolvers } from "./build-resolvers";
import type { BuildOptions } from "./types";

export function buildWebpack(options: BuildOptions): webpack.Configuration {
  const isDev = options.mode == "development";
  return {
    mode: options.mode ?? "development",
    entry: options.paths.entry,
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    output: {
      path: options.paths.output,
      filename: "[name].js",
      clean: true,
    },
    plugins: buildPlugins(options),
    devServer: isDev ? buildDevserver(options) : undefined,
    devtool: isDev ? "inline-source-map" : false,
  };
}
