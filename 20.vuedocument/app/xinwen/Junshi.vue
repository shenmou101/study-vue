<template>
  <div class="container">
    <h1>我是军事栏目</h1>
    <ul>
      <li v-for="item in xinwenlist">
        <a v-link="{name: 'junshiwenzhang', params:{bianhao: item.id}}">{{item.title}}</a>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        xinwenlist: []
      }
    },
    created(){
      var self = this;
      $.get("/api/news.json", function (data) {
        self.xinwenlist = data;
        //console.log('this.xinwenlist =',this.xinwenlist)
      });
    },
    ready(){
      $("ul").css({"position":"relative"}).animate({"left": 300}, 9000)
    }
  }
</script>


<style>

</style>
