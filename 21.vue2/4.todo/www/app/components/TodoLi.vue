<style>
	.done{
		text-decoration:line-through;
	}
	.cur{
		background-color: orange;
	}
</style>

<template>
	<li>
		<input ref="cbox" type="checkbox" v-bind:checked="item.done" @click="changedone">
		<span v-show="!onEdit" @dblclick="setEdit(true)" v-bind:class="{'done' : item.done}">{{item.title}}</span>
		<input ref="txt" v-show="onEdit" type="text" v-bind:value="item.title" @keyup.enter="setEdit(false)"/>

		<input type="button" value="×" @click="del" />
	</li>
</template>


<script>
	import * as todoTypes from "../store/todo-types.js";
	export default {
		props : ["item"],
		data(){
			return{
				onEdit : false
			}
		},
		methods : {
			setEdit(trueorfalse){
				this.onEdit = trueorfalse;

				//当结束编辑的时候，要发送请求
				if(trueorfalse == false){
					this.$store.dispatch(todoTypes.CHANGETITLE , {
						"id" : this.item.id,
						"title" : this.$refs.txt.value
					});
				}
			},
			changedone(){
				this.$store.dispatch(todoTypes.CHANGEDONE , {
					"id" : this.item.id,
					"done" : event.target.checked 
				});
			},
			del(){
				this.$store.dispatch(todoTypes.DEL , {
					"id" : this.item.id,
				});
			}
		}
	}
</script>