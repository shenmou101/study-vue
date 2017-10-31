<style scopoed>
	
</style>

<template>
	<div>
		<div>我是子组件 {{count2}}</div>
		
		<h1>
			<button v-on:click="minusHandler">减少</button> 
			 {{count}}
			 <input type="text" v-model.number="n">
			<button v-on:click="addHandler">增加</button>
		</h1>

		<h1>{{nansheng }}</h1>
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	export default {
		data(){
			return {n: 0}
		},
		// computed : {
		// 	count(){
		// 		return this.$store.state.count
		// 	}
		// },
		computed: mapState({
	    // 箭头函数可使代码更简练
	    count: state => state.counter.count,

	    // 传字符串参数 'count' 等同于 `state => state.count`
	    count2: 'count',

	    // 为了能够使用 `this` 获取局部状态，必须使用常规函数
	    countPlusLocalState (state) {
	      //return state.count + this.localCount
	    },
	    nansheng () {
	    	return this.$store.getters.nansheng
	    }
	    
	  }),
		methods : {
			addHandler(){
				this.$store.dispatch("add", this.n);
			},
			minusHandler(){
				this.$store.commit("minus");
			}
		}
	}
</script>