var routerList = {
  '/xinwen': {
    name: 'xinwen',
    component: require("./xinwen/Xinwen.vue"),
    subRoutes: {
      '/junshi': {
        name: 'junshi',
        component: require('./xinwen/Junshi.vue'),
        subRoutes: {
          '/:bianhao': {
            name: 'junshiwenzhang',
            component: require('./xinwen/Junshiwenzhang.vue')
          }
        }
      },
      '/yule': {
        name: 'yule',
        component: require('./xinwen/Yule.vue')
      },
      '/guoji': {
        name: 'guoji',
        component: require('./xinwen/Guoji.vue')
      }
    }
  },
  '/yinyue': {
    name: 'yinyue',
    component: require("./yinyue/Yinyue.vue"),
  },
  '/xinwen/yulu/gouwu': {
    name: 'gouwu',
    component: require("./xinwen/Gouwu.vue"),
  }
};

module.exports =  routerList;