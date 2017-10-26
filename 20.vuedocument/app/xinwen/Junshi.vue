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
        xinwenlist: [
          {"id": 1, "title": "巴拿马发生恐怖袭击，丧生3人"},
          {"id": 2, "title": "巴拿马发生恐怖袭击，丧生3人"},
          {"id": 3, "title": "巴拿马发生恐怖袭击，丧生3人"},
          {"id": 4, "title": "巴拿马发生恐怖袭击，丧生3人"}
        ]
      }
    }
  }
</script>


<style>

</style>
