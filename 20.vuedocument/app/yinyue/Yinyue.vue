<template>
  <div class="container">
    <h1>我是音乐栏目</h1>
    <validator name="validation1">
      <form novalidate>
        <div class="username-field">
          <label for="username">username:</label>
          <input id="username" type="text" v-validate:username="['required']">
        </div>
        <div class="comment-field">
          <label for="comment">comment:</label>
          <input id="comment" type="text" v-validate:comment="{ maxlength: 256 , minlength: 6 }">
        </div>
        <div class="errors">
          <p v-if="$validation1.username.required">Required your name.</p>
          <p v-if="$validation1.comment.maxlength">Your comment is too long.</p>
          <p v-if="$validation1.comment.minlength">Your comment is too short.</p>
        </div>
        <input type="submit" value="send" v-if="$validation1.valid">
      </form>
    </validator>
  </div>
</template>

<script>

</script>

<style>

</style>
