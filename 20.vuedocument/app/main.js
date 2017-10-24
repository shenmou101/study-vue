var Vue = require("vue");
var My = require("./My.vue");

// Vue.component('my', My);
new Vue({
  el: '#app',
  data: {
    a : 200
  },
  components: {
    My
  }
});