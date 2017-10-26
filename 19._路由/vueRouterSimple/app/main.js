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
  template: "<p>我是国内新闻  {{$route.params.a}}</p>"
});

var Xinwen = {
  template: '<p>我是新闻栏目!</p><router-view></router-view>'
};

var Xinxixiugai = {
  template: '<p>个人信息修改</p>'
};

var Xuesheng = {
  template: '<h1>学生信息查询 学号：{{$route.params.xuehao}}</h1>',
  data: function () {
    return {

    }
  }
};


//定义根组件
var App = {
  data : function () {
    return{
      xueshengArr : [
        {xingming: '小明', xuehao: 10001},
        {xingming: '小红', xuehao: 10002},
        {xingming: '小刚', xuehao: 10003}
      ]
    }
  }
};

//创造一个router的实例
//你可以构造函数中传入一些参数
var router = new VueRouter();

// 定义路由规则
// 每条路由规则应该映射到一个组件。这里的“组件”可以是一个使用 Vue.extend
// 创建的组件构造函数，也可以是一个组件选项对象。
// 稍后我们会讲解嵌套路由
router.map({
  '/xuesheng/:xuehao': {
    name: 'xuesheng',
    component: Xuesheng
  },
  '/xinwen': {
    component: Xinwen,
    subRoutes: {
      "/": {
        component: {
          template: "<p>你没有选择子栏目!!</p>"
        }
      },
      "/guonei/:a": {
        component: Guoneixinwen,
        xuyaodenglu: false
      },
      "/guoji": {
        component: Guojixinwen
      }
    }
  },
  '/yinyue': {
    component: Yinyue
  },
  '/xinxixiugai':{
    component: Xinxixiugai,
    xuyaodenglu: true
  },
  '/login':{
    component: {
      template: '<p>对不起，页面需要登录！！</p>'
    }
  }
});

//全局登录状态
var login = false;

//定义一个beforeEach函数，这个函数在路由变化的时候发生，是vue-router给router定义的函数
router.beforeEach(function (transition) {
  console.log(transition);
  if(transition.to.xuyaodenglu && !login){
    transition.redirect('/login');
    return;
  }
  transition.next()
});

router.start(App, '#app');