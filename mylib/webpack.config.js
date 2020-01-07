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

  // This tells webpack to _only_ include
  // "dependencies" listed in your package.json
  // in the final bundle, excluding "devDependencies"
  // and "peerDependencies".
  // Libraries that most likely will be used by many
  // dependencies of the _Component Consumer_ should
  // be marked as "peerDependencies" to avoid having multiple
  // copies in the Component Consumer's final bundle.
  // Examples of libraries that should be treated this way are
  // - react
  // - react-dom
  // - lodash
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
