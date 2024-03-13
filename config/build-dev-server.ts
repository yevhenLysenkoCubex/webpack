import type { Configuration as DevServerConfiguration } from "webpack-dev-server";
import type { BuildOptions } from "./types";

export function buildDevserver(options: BuildOptions): DevServerConfiguration {
  return {
    port: options.port ?? 3002,
    open: true,
    historyApiFallback: true,
    hot: true,
  };
}
