<template>
    <div>
        <h1>page 1 {{data}}</h1>
        <mt-checklist
          title="checkbox list"
          v-model="value"
          :options="['optionA', 'optionB', 'optionC']">
        </mt-checklist>
    </div>
</template>
<script>
import nvHead from '../components/header.vue';
import { Checklist } from 'mint-ui';
require('../assets/scss/CV.scss');
require('../assets/scss/iconfont/iconfont.css');
require('../assets/scss/github-markdown.css');

export default {
    components: {
        nvHead,
        Checklist
    },
    data() {
        return {
            data: [],
            single: false,
            value: ['11', '22', '33']
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
