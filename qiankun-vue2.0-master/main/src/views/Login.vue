<template>
  <div class="home">
    <h1>main登录页面</h1>
    <el-button type="primary" @click="toHome">登录</el-button>
  </div>
</template>

<script>
export default {
  name: "Login",
  mounted() {
    sessionStorage.removeItem("currentApp");
    sessionStorage.removeItem("currentPage");
    this.$actions.setGlobalState({ userInfo: { name: "lizhijie429" } });
  },
  methods: {
    // 跳转首页
    toHome() {
      this.$router.push(process.env.VUE_APP_DEFAULT_APP);
    },
  },
};
</script>
