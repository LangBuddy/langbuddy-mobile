module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["./"],
          extensions: [".ts", ".ios.ts", ".android.ts", ".tsx"],
          alias: {
            Components: "./components",
            Hooks: "./hooks",
            Navigator: "./navigator",
            Screens: "./screens",
            Utils: "./utils",
            Assets: "./assets",
            Ui: "./ui",
            Styles: "./styles"
          },
        },
      ],
    ],
  };
};
