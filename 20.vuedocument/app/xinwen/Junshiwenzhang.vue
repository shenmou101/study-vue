<template>
  <div class="container">
    <h1>我是军事文章{{bianhao}}</h1>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        bianhao: this.$route.params.bianhao
      }
    },
    beforeCompile(){
      $.get("/123", function (data) {
        alert(data)
      })
    }
  }
</script>


<style>

</style>
