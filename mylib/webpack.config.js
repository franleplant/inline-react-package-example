const path = require("path");

// This is where we define the Inline magic.
// This loader will turn all .svg, .jpg and .png files
// into something that can be inlined in the final bundle
const fileRules = {
  test: /\.(svg|jpg|png)$/,
  use: [
    {
      loader: "url-loader",
      options: {
        // All files no matter what size
        limit: Infinity
      }
    }
  ]
};

// Pretty standard babel configurations for modern react apps
const jsRules = {
  test: /\.jsx?$/,
  exclude: /node_modules/,
  use: {
    loader: "babel-loader",
    options: {
      presets: ["@babel/preset-env", "@babel/preset-react"]
    }
  }
};

module.exports = {
  entry: "./src/index.js",
  mode: "development",
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "dist"),
    libraryTarget: "umd"
  },

  // Manually tell webpack about our "peerDependencies"
  // that should not be included in the final bundle and
  // will be provided by the Component Consumer, like an Application
  externals: [
    "react",
    "react-dom",
    "@emotion/core",
    "@emotion/styled",
    "emotion-theming"
  ],
  module: {
    rules: [jsRules, fileRules]
  }
};
