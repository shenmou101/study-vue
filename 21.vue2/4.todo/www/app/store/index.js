import Vue from "vue";
import Vuex from "vuex";
import createLogger from "./logger/logger.js";
import todoActions from "./actions/todoActions.js";
import * as todoTypes from "./todo-types.js";

Vue.use(Vuex);

let store = new Vuex.Store({
	//store中的四大属性state、mutations、getters、actions、plugins
	state : {
		"todos" : []
	},
	mutations : {
		[todoTypes.INIT] (state , todos){
			//这里写Ajax？不是的！而是应该在actions中写！
			state.todos = todos;
		},
		[todoTypes.CHANGETITLE] (state , payload){
			//这里写Ajax？不是的！而是应该在actions中写！
			state.todos.forEach((item)=>{
				if(item.id == payload.id){
					item.title = payload.title;
				}
			});
		},
		[todoTypes.CHANGEDONE] (state , payload){
			//这里写Ajax？不是的！而是应该在actions中写！
			state.todos.forEach((item)=>{
				if(item.id == payload.id){
					item.done = payload.done;
				}
			});
		},
		[todoTypes.ADD] (state , payload){
			//这里写Ajax？不是的！而是应该在actions中写！
			state.todos.push({
				"id" : state.todos.length,
				"title" : payload.title
			});
		},
		[todoTypes.DEL] (state , payload){
			//这里写Ajax？不是的！而是应该在actions中写！
			state.todos = state.todos.filter((item) => {
				return item.id != payload.id;
			});
		}
	},
	actions : {
		...todoActions
	},
	plugins: [createLogger()],
	getters : {
		wz(state){
			return state.todos.filter((item)=>{
				return item.done == false;
			})
		},
		yz(state){
			return state.todos.filter((item)=>{
				return item.done == true;
			})
		}
	}
});

export default store;