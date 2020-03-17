const {
  override,
  addPostcssPlugins,
  addLessLoader,
  fixBabelImports,
  addDecoratorsLegacy,
  addWebpackAlias
} = require('customize-cra');

const { resolve } = require('path');


module.exports = override(
  // less
  addLessLoader({}),
  // antd按需加载
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  // 语法修饰
  addDecoratorsLegacy(),
  // 路径别名
  addWebpackAlias({
    $comp: resolve(__dirname, './src/components'),
    $comt: resolve(__dirname, './src/comtainer'),
    $conf: resolve(__dirname, './src/config'),
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
  })])
)