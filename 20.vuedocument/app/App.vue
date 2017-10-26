<template>
  <div id="app">
    <header>
      <h1>vue小站</h1>
      <nav>
        <!-- 使用指令 v-link 进行导航。 -->
        <a v-link="{ name: 'xinwen' }">新闻</a>
        <a v-link="{ name: 'yinyue' }">音乐</a>
      </nav>
    </header>
    <!-- 路由外链 -->
    <router-view></router-view>
  </div>
</template>

<script>

</script>


<style scoped>
  @import '/assets/css/reset.css'
</style>
<style>
  .container {
    width: 1000px;
    margin:0 auto;
  }
  header{
    width: 100%;
    height: 60px;
    background-color: #ddd;
  }
  header h1 {
    font-size: 30px;
    color: white;
    float: left;
  }
  header nav{float: left;margin-left: 200px}
  header nav a {
    font-size: 30px;
    float: left;
    width: 100px;
    height: 60px;
    line-height: 60px;
    text-align: center;
  }
  .v-link-active{
    background: orange;
  }
  .cl{clear: both}
</style>
