import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack, { DefinePlugin, Configuration } from "webpack";
import { BundleAnalyzerPlugin } from "webpack-bundle-analyzer";
import HtmlWebpackPlugin from "html-webpack-plugin";
import path from "path";
import ForkTsCheckerWebpackPlugin from "fork-ts-checker-webpack-plugin";
import ReactRefreshWebpackPlugin from "@pmmmwh/react-refresh-webpack-plugin";
import CopyPlugin from "copy-webpack-plugin";

import { BuildOptions } from "./types";

export function buildPlugins({
  paths,
  analyzer,
  mode,
  platform,
}: BuildOptions): Configuration["plugins"] {
  const isDev = mode === "development";
  const isProd = mode === "production";

  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, "favicon.png"),
    }),
    isDev && new webpack.ProgressPlugin(),
    isProd &&
      new MiniCssExtractPlugin({
        filename: "css/[name].[contenthash:8].css",
        chunkFilename: "css/[name].[contenthash:8].css",
      }),
    analyzer && new BundleAnalyzerPlugin(),
    new DefinePlugin({
      __PLATFORM__: JSON.stringify(platform),
      __ENV__: JSON.stringify(mode),
    }),
    new ForkTsCheckerWebpackPlugin(),
    isDev && new ReactRefreshWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, "locales"),
          to: path.resolve(paths.output, "locales"),
        },
      ],
    }),
  ].filter(Boolean);
}
