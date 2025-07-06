const { override, addBabelPlugin } = require("customize-cra");

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
        "@styles": "./src/styles",
      },
    },
  ])
);
