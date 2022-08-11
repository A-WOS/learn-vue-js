<!-- 컴포넌트 태그는 기존 html 태그와 혼동할 수 있기 때문에
가능하면 두단어 이상으로 조합해서 명명
-->
<template>
  <header>
    <h1>{{ propsdata }}</h1>
    <button v-on:click="sendEvent">send</button>
  </header>
</template>

<script>
export default {
    props: ['propsdata'],
    methods: {
        sendEvent: function () {
            this.$emit('renew')
        }
    }
}
</script>

<style>

</style>