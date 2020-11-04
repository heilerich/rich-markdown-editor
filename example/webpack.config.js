// eslint-disable-next-line @typescript-eslint/no-var-requires
const path = require("path");

const commonDefaults = {
  mode: "development",

  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },

  output: {
    filename: "main.js",
    path: path.resolve(__dirname, "dist"),
  },

  module: {
    rules: [
      {
        test: /\.(tsx?|js)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
            },
          },
        ],
      },
    ],
  },
};

module.exports = [
  {
    name: "default",
    entry: path.resolve(__dirname, "src", "index.js"),
  },
  {
    name: "collab",
    entry: path.resolve(__dirname, "src", "index-collab.js"),
  },
].map(configuration => Object.assign({}, configuration, commonDefaults));
