const createExpoWebpackConfigAsync = require("@expo/webpack-config");
const path = require("path");

module.exports = async function (env, argv) {
  const config = await createExpoWebpackConfigAsync(env, argv);
  config.module.rules.forEach((r) => {
    if (r.oneOf) {
      r.oneOf.forEach((o) => {
        if (o.use && o.use.loader && o.use.loader.includes("babel-loader")) {
          o.include = [
            path.resolve("."),
            path.resolve("node_modules/@ui-kitten/components"),
          ];
        }
      });
    }
  });

  // Add the resolve configuration here
  config.resolve = {
    alias: {
      "react-native$": "react-native-web",
      "../Utilities/Platform": "react-native-web/dist/exports/Platform",
      "../../Utilities/Platform": "react-native-web/dist/exports/Platform",
      "./Platform": "react-native-web/dist/exports/Platform",
      // Additional aliases to resolve other module errors
      "./RCTAlertManager": "react-native-web/dist/exports/Alert",
      "../../Image/Image": "react-native-web/dist/exports/Image",
      "../../StyleSheet/PlatformColorValueTypes":
        "react-native-web/dist/exports/StyleSheet",
      "./PlatformColorValueTypes": "react-native-web/dist/exports/StyleSheet",
      "../Components/AccessibilityInfo/legacySendAccessibilityEvent":
        "react-native-web/dist/exports/AccessibilityInfo",
      "../Utilities/BackHandler": "react-native-web/dist/exports/render",
      "./RCTNetworking": "identity-obj-proxy",
      "./BaseViewConfig": "identity-obj-proxy",
      // Add other aliases as needed based on the remaining errors
    },
  };

  return config;
};

// const createExpoWebpackConfigAsync = require("@expo/webpack-config");

// module.exports = async function (env, argv) {
//   const config = await createExpoWebpackConfigAsync(env, argv);

//   // Add the extensions to the existing ones
//   config.resolve.extensions.push(".ios.js", ".android.js", ".web.js");

//   // Add any other modifications to the config as needed
//   config.resolve.alias["../Utilities/Platform"] =
//     "react-native-web/dist/exports/Platform";

//   return config;
// };

// const createExpoWebpackConfigAsync = require("@expo/webpack-config");

// // Expo CLI will await this method so you can optionally return a promise.
// module.exports = async function (env, argv) {
//   const config = await createExpoWebpackConfigAsync(env, argv);
//   // If you want to add a new alias to the config.
//   config.resolve.alias["moduleA"] = "moduleB";

//   // Maybe you want to turn off compression in dev mode.
//   if (config.mode === "development") {
//     config.devServer.compress = false;
//   }

//   // Or prevent minimizing the bundle when you build.
//   if (config.mode === "production") {
//     config.optimization.minimize = false;
//   }

//   // Finally return the new config for the CLI to use.
//   return config;
// };
