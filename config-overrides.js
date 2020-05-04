// module.exports = function override(config, env) {
//     // do stuff with the webpack config...
//     return config;
//   };
// 覆盖webpack配置的
const { override, fixBabelImports } = require('customize-cra');

 module.exports = override(
   fixBabelImports('import', {
     libraryName: 'antd-mobile',
     style: 'css',
   }),
 );