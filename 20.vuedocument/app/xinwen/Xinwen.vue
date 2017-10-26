<template>
  <div class="xinwen container">
    <h1>我是新闻栏目,请选择子栏目</h1>
    <nav>
      <a v-link="{name: 'junshi'}">军事新闻</a>
      <a v-link="{name: 'yule'}">娱乐新闻</a>
      <a v-link="{name: 'guoji'}">国际新闻</a>
    </nav>
    <div class="cl"></div>
    <router-view></router-view>
  </div>
</template>

<script>

</script>

<style>
  .xinwen h1{font-size: 30px}
  .xinwen nav a {
    float: left;
    font-size: 30px;
    margin-right: 20px;
  }
  .cl{clear: both}
</style>
