const { override, fixBabelImports, addLessLoader } = require("customize-cra");

module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd",
    libraryDirectory: "es",
    style: true
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: {
      "@secondry-color": "#0693e3",
      "@primary-color": "#0693e3",
      "@link-color": "#0693e3",
      "@text-color-secondary": "#333",
      "@heading-color": "#333",
      "@layout-header-background": "#001529",
      "@layout-body-background": "#f0f2f5",
      "@btn-primary-bg": "#0693e3",
      "@bg-color": "#0693e3",
      "@font-size-base": "14px",
      "@border-radius-base": "2px"
    }
  })
);
