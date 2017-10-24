//引包
var Vue = require('vue');
var VueRouter = require('vue-router');

//用use函数加载插件
Vue.use(VueRouter);


// 定义组件
var Yinyue = {
  template: '<p>我是音乐栏目!' +
  '<router-view></router-view>' +
  '</p>'
};

var Guojixinwen = Vue.extend({
  template: "<p>我是国际新闻</p>"
});
var Guoneixinwen = Vue.extend({
  template: "<p>我是国内新闻</p>"
});

var Xinwen = {
  template: '<p>我是新闻栏目!</p><router-view></router-view>'
};

//定义根组件
var App = {};

//创造一个router的实例
//你可以构造函数中传入一些参数
var router = new VueRouter();

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/xinwen': {
    component: Xinwen,
    subRoutes: {
      "/": {
        component: {
          template: "<p>你没有选择子栏目!!</p>"
        }
      },
      "/guonei": {
        component: Guoneixinwen
      },
      "/guoji": {
        component: Guojixinwen
      }
    }
  },
  '/yinyue': {
    component: Yinyue
  }
});

router.start(App, '#app');