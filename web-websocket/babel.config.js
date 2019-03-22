// 项目生成时自带的，与app有关
// module.exports = {
//   presets: ["@vue/app"]
// };
module.exports = {
  "plugins": [
    "@babel/plugin-syntax-dynamic-import", //动态import需要单独配置babel库
    "@babel/plugin-syntax-import-meta"     //动态import需要单独配置babel库
  ],
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "esmodules": true
        }
      }
    ]
  ],
  env: {
    production:{},
    development:{},
    test: {
      presets: [["env", { "targets": { "node": "current" } }]]
    }
  }
}