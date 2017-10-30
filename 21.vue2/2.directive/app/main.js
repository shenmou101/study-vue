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
	directives : {
		shezhi : function(el,bind){
			el.style.background = bind.value;
			console.log(bind);
			if(bind.modifiers.bantouming){
				el.style.opacity = 0.6
			}
		}
	}
});