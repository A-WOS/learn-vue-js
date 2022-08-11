<template>
  <div>
    <!-- <form action=""> -->
    <!-- form의 기본동작이 새로고침 -->
    <form v-on:submit="submitForm">
      <div>
        <label for="username">id: </label>
        <input id="username" type="text" v-model="username">
      </div>
      <div>
        <label for="password">pw: </label>
        <input id="password" type="password" v-model="password">
      </div>
      <button type="submit">login</button>
    </form>
  </div>
</template>

<script>
export default {
  // 컴포넌트 단위로 개발시
  // 컴포넌트 간의 데이터가 공유되지 않게
  // (값의 참조가 일어나지 않게)
  data: function () {
    return {
      username: '',
      password: '',
    }
  },
  methods: {
    submitForm: function (event) {
      // 새로고침을 막는 방법
      event.preventDefault();
      console.log(this.username, this.password);
    }
  }
}
</script>

<style>

</style>