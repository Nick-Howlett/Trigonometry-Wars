const path = require("path");

module.exports = {
  resolve: {
    extensions: [".js", ".ts"],
  },
  devtool: "source-map",
  mode: "production",
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
        },
      },
      { test: /\.tsx?$/, loader: "ts-loader" },
    ],
  },
};
