<template>
	<h1>page 1 {{data}}</h1>
</template>
<script>
import nvHead from '../components/header.vue';
require('../assets/scss/CV.scss');
require('../assets/scss/iconfont/iconfont.css');
require('../assets/scss/github-markdown.css');

export default {
    components: {
        nvHead
    },
    data() {
        return {
            data: []
        };
    },
    mounted() {
        var that = this;
        this.$http.get('http://127.0.0.1:3000/users').then((response) => {
            console.log('hello', response);
            that.data = response.body;
        }, (response) => {
            console.log('hello');
        });
    }
};
</script>
<style lang="scss">
    .index {
        width: 100%;
        background-color: #fff;
        margin-top: 40%;
    }
</style>
