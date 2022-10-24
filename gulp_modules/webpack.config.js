import UglifyJsPlugin from "uglifyjs-webpack-plugin";

const getConfig = (mode) => {
  return {
    mode: "production",
    optimization: {
      minimize: mode,
      minimizer: [
        new UglifyJsPlugin({
          // include: /\.min\.js$/,
          uglifyOptions: {
            output: {
              comments: false,
            },
          },
          parallel: true,
        }),
      ],
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: "/node_modules/",
          loader: "babel-loader",
        },
      ],
    },
    performance: {
      hints: false,
    },
    // devtool: 'eval-source-map'
  };
};

export default getConfig;
