import Vue from "vue";
import Vuex from "vuex";
import MyCompo from "./MyCompo.vue";
import store from "./store.js";

new Vue({
	el : "#app",
	store,
	data : {
		a : 100
	},
	components : {
		MyCompo
	}
});