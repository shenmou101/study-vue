<template>
    <div class="itembox">
        信息盒子 <a v-link="{ name:'junshiwenzhang', params: { bianhao : bianhao} }">{{title}}</a>
    </div>
</template>

<script>
    export default {
        props: ['title', 'bianhao']
    }
</script>

<style>
    .itembox {
        width: 400px;
        height: 150px;
        background: pink;
        font-size: 24px;
        box-shadow: 2px 2px 2px black;
        margin-bottom: 20px;
    }
</style>