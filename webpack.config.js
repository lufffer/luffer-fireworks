const path = require("path");
const Dotenv = require("dotenv-webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinizerWebpackPlugin = require("css-minimizer-webpack-plugin");
const ImageMinimizerWebpackPlugin = require("image-minimizer-webpack-plugin");
const ImageMinimizerPlugin = require("image-minimizer-webpack-plugin");

module.exports = (env, argv) => {
  console.log(env);
  console.log(argv);

  return {
    devtool: argv.mode === "development" ? "eval-source-map" : "source-map",
    devServer:
      argv.mode === "development"
        ? { static: "./dist/", hot: true, watchFiles: ["./src/**/*.html"] }
        : {},
    entry: "./src/index.ts",
    mode: argv.mode,
    module: {
      rules: [
        { test: /\.html$/, loader: "html-loader" },
        {
          test: /\.css$/,
          use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"],
        },
        { test: /\.ts$/, use: "ts-loader", exclude: /node_modules/ },
        { test: /\.(gif|jpg|jpeg|png|svg|webp)$/, type: "asset/resource" },
      ],
    },
    optimization: {
      minimize: true,
      minimizer: [
        new CssMinizerWebpackPlugin(),
        new ImageMinimizerWebpackPlugin({
          minimizer: {
            implementation: ImageMinimizerPlugin.sharpMinify,
            options: {
              encodeOptions: {},
            },
          },
        }),
      ],
    },
    plugins: [
      new Dotenv(),
      new HtmlWebpackPlugin({ template: "./src/index.html" }),
      new MiniCssExtractPlugin(),
    ],
    resolve: {
      extensions: [".css", ".js", ".ts"],
    },
    output: {
      filename: "bundle.js",
      path: path.resolve(__dirname, "dist"),
      clean: true,
    },
  };
};
