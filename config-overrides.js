const webpack = require("webpack");
const { override, addBabelPlugin } = require("customize-cra");

const addDefinePluginInProduction = (config, env) => {
  if (env === "production") {
    config.plugins.push(
      new webpack.DefinePlugin({
        "process.env": {
          NODE_ENV: JSON.stringify("production"),
        },
      })
    );
  }
  return config;
};

module.exports = override(
  addBabelPlugin([
    "module-resolver",
    {
      alias: {
        "@pages": "./src/pages",
        "@routes": "./src/routes",
        "@services": "./src/services",
        "@components": "./src/components",
        "@utils": "./src/utils",
        "@assets": "./src/assets",
        "@types": "./src/types",
        "@hooks": "./src/hooks",
        "@styles": "./src/styles",
      },
    },
  ]),
  addDefinePluginInProduction
);
