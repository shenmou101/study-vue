var path = require("path");
module.exports = {
  entry:{
    app: ["./app/main.js"]
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /.vue$/,  //编译以.vue结尾的文件
        loaders: "vue-loader",  //使用vue-loader编译器
        exclude: ["/node_modules/","assets"]  //不编译这些文件
      }
    ]
  },
  resolve: {
    alias: {
    'vue': 'vue/dist/bundle.js'
    }
  },
  watch: true
};