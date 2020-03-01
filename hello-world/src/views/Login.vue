<template>
  <div>
    <button @click="login" v-if="!isLogin">登录</button>
    <button @click="logout" v-else>注销</button>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
export default {
  methods: {
    login() {
      //window.isLogin = true;
      //提交mutation变更状态

      //this.$store.commit("user/login");

      //派发动作,触发actions
      // this.$store
      //   .dispatch("user/login", "admin")
      //   .then(() => {
      //用户可以改状态this.$store.state.user.isLogin = true;
      this["user/login"]("admin")
        .then(() => {
          // //动态添加路由
          // this.$router.addRoutes([
          //   {
          //     path: "/admin",
          //     name: "admin",
          //     component: () =>
          //       import(/* webpackChunkName: "about" */ "../views/Admin.vue"),
          //     children: [
          //       {
          //         path: "/admin/course/:name",
          //         name: "detail",
          //         component: () => import("../views/Detail.vue")
          //       }
          //     ]
          //   }
          // ]);
          console.log("进入admin");
          //this.$router.push("/admin");
          console.log(this.$route.query.redirect);
          this.$router.push(this.$route.query.redirect);
        })
        .catch(() => {
          alert("用户名或密码错误，请重试！");
        });
    },
    logout() {
      this.$store.commit("user/logout");
      // window.isLogin = false;
      this.$router.push("/");
    },
    ...mapActions(["user/login", "user/logout"])
  },
  computed: {
    // isLogin() {
    //   //return window.isLogin;
    //   return this.$store.state.user.isLogin;
    // }
    ...mapState("user", ["isLogin"])
  }
};
</script>

<style lang="scss" scoped>
</style>