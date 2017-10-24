//引包
var Vue = require('vue');
var VueRouter = require('vue-router');

// 定义组件
var Yinyue = {
  template: '<p>我是音乐!</p>'
};

var Xinwen = {
  template: '<p>我是新闻!</p>'
};

//定义根组件
var App = {};

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/xinwen': {
    component: Yinyue
  },
  '/yinyue': {
    component: Xinwen
  }
});


//路由实例化
Vue.use(VueRouter);