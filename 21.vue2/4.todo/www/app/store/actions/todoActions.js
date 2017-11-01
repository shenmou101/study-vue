import * as todoTypes from "../todo-types.js";
export default {
	//初始化
	[todoTypes.INIT]({commit}){
		$.get("/getAll",function(data){
			commit(todoTypes.INIT, data.results);
		});
	},
	[todoTypes.CHANGETITLE]({commit},payload){
		$.get("/changetitle",{"id" : payload.id, "title" : payload.title},function(data){
			if(data == "ok"){
				commit(todoTypes.CHANGETITLE, payload);
			}
		});
	},
	[todoTypes.CHANGEDONE]({commit},payload){
		$.get("/changedone",{"id" : payload.id, "done" : payload.done ? 1 : -1},function(data){
			if(data == "ok"){
				commit(todoTypes.CHANGEDONE, payload);
			}
		});
	},
	[todoTypes.ADD]({commit},payload){
		$.get("/add",{"title" : payload.title , "id" : payload.id},function(data){
			if(data == "ok"){
				commit(todoTypes.ADD, payload);
			}
		});
	},
	[todoTypes.DEL]({commit},payload){
		$.get("/del",{"id" : payload.id},function(data){
			if(data == "ok"){
				commit(todoTypes.DEL, payload);
			}
		});
	}
}