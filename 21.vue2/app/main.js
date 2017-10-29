import Vue from "vue";
import MyCompo from "./MyCompo.vue";

new Vue({
	el : "#app",
	data : {
		a : 100
	},
	components : {
		MyCompo
	},
	methods : {
		changea : function(number){
			this.a += number;
		}
	}
});