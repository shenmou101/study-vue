<template>
	<div>
		增加一个TODO：
		<input type="text" v-model="txt" @keyup.enter="add"/>
		<input type="button" value="增加" @click="add" />

		<hr>

		现有TODO： 
		<ul>
			<li is="todo-li" v-for="(item,index) in todos" :item="item"></li>
		</ul>
		
		<hr>
		总共：{{this.$store.state.todos.length}}个 已做{{this.$store.getters.yz.length}}个 未做{{this.$store.getters.wz.length}}个 
		<input type="button" value="全部" @click="setstate('all')"		v-bind:class="{'cur' : this.state == 'all'}">
		<input type="button" value="仅看已做" @click="setstate('jkyz')"  v-bind:class="{'cur' : this.state == 'jkyz'}" >
		<input type="button" value="仅看未做" @click="setstate('jkwz')"  v-bind:class="{'cur' : this.state == 'jkwz'}" >
	</div>
</template>


<script>
	import TodoLi from "./TodoLi.vue";
	import * as todoTypes from "../store/todo-types.js";
	export default {
		components : {
			TodoLi
		},
		data(){
			return {
				"txt" : "",
				//查看状态，all全部，jkwz仅看未做,jkyz仅看已做
				"state" : "all"
			}
		},
		computed : {
			todos(){
				if(this.state == "all"){
					return this.$store.state.todos;
				}else if(this.state == "jkwz"){
					return this.$store.getters.wz;
				}else if(this.state == "jkyz"){
					return this.$store.getters.yz;
				}
			}
		},
		// 组件被创建之后，生命周期函数
		created(){
			this.$store.dispatch(todoTypes.INIT);
		},
		methods : {
			add(){
				this.$store.dispatch(todoTypes.ADD , {
					title : this.txt
				});


				this.txt = ""
			},
			//仅看未做
			setstate(word){
				this.state = word
			} 
		}
	}
</script>