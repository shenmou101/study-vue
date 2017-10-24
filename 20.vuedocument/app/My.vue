<!--template就是html语境-->
<template>
    <div class="my">
        <h1>我是My组件{{m}} {{a}}</h1>
        <input type="button" value=按我 v-on:click="fun">
        <zi></zi>
    </div>
</template>

<script>
    import Zi from './Zi.vue';
    export default {
      props: ['a'],
      data(){
       return {
         m: 123
       }
      },
      methods : {
        fun(){
          this.m++;
          this.a++
        }
      },
      components: {
        Zi
      }
    }
</script>

<style>
    .my{
        background-color: darkseagreen;
    }
</style>
