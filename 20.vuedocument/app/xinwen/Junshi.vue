<template>
  <div class="container">
    <h1>我是军事栏目</h1>
    <ul>
      <item-box v-for="item in xinwenlist" v-bind:title="item.title" v-bind:bianhao="item.id"></item-box>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  import ItemBox from '../component/ItemBox.vue';
  export default {
    data(){
      return {
        xinwenlist: []
      }
    },
    created(){
      var self = this;

      //jquery发送请求的方法
      /*$.get("/api/news.json", function (data) {
        self.xinwenlist = data;
        //console.log('this.xinwenlist =',this.xinwenlist)
      });*/

      //vue-resource发送请求的方法
      this.$http.get("/api/news.json").then(response => {

          // get body data
          self.xinwenlist = response.body;

      }, response => {
          // error callback
      });

    },
    ready(){
      $("ul").css({"position":"relative"}).animate({"left": 300}, 9000)
    },
    components: {ItemBox}
  }
</script>


<style>

</style>
