<template>
  <div id="app">
    <nav>
      <router-link to="/">首页</router-link>&nbsp;&nbsp;&nbsp;&nbsp;
      <router-link to="/admin">管理</router-link>

      <span v-if="isLogin">
        {{welcome}}
        <button>注销</button>
      </span>
    </nav>

    <!-- 路由出口 动态:include="['admin']" max="10" 最大10个组件，进出-->
    <keep-alive include="admin">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";
export default {
  name: "App",
  computed: {
    ...mapState("user", ["isLogin"]),
    ...mapGetters("user", ["welcome"])
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
