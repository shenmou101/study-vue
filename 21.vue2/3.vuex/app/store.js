import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex)

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

const store = new Vuex.Store({
	//这里的state必须是JSON，是一个对象
  state: {
    count: 0		//这里就是初始值的罗列
  },
  //罗列所有可能改变state的方法
  mutations: {
  	//没有所谓的大写字母的Type了，就是一个个函数
    add (state) {
      state.count++
    },
    minus (state) {
    	state.count--
    }
  }
});

export default store;