<style>
	
</style>

<template>
	<div>
		<h1>我是子组件{{m + 1}}</h1>
		<input type="text" v-model.number="m" />
		<button v-on:click="changeAemit">按我</button>

		<hr>
		{{arr}}
		<input type="text" v-for="(item,index) in arr" v-model.number="arr[index]">

		<hr>
		<div ref="box">你好</div>
		<button v-on:click="changebox">按我</button>
	</div>
</template>

<script>
	export default {
		data(){
			return {
				m : 100,
				arr : [345,245,3456,67]
			}
		},
		methods : {
			changeAemit : function(){
				this.$emit("changea",8);
			},
			changebox : function(){
				this.$refs.box.style.background = "red";
			}
		}
	}
</script>