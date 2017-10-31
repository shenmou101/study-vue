import Vue from "vue";
import Vuex from "vuex";
import counter from "./counter.js"

Vue.use(Vuex)

// 如果在模块化构建系统中，请确保在开头调用了 Vue.use(Vuex)

const store = new Vuex.Store({
  modules : {
    counter
  }
});

export default store;