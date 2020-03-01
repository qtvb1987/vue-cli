<template>
  <div class="admin">
    <img alt="Vue logo" :src="`${publicPath}assets/logo.png`" />
    <CourseList :courses="courses"></CourseList>

    <!-- 嵌套内容出口 -->
    <router-view></router-view>
  </div>
</template>

<script>
import CourseList from "@/components/CourseList.vue";
import { getCourses } from "@/api/course";
export default {
  name: "admin",
  components: {
    CourseList
  },
  data() {
    return {
      title: "购物车",
      course: "",
      selectedCourse: "",
      courses: [],
      totalCount: 0,
      // show:false,
      price: 0,
      publicPath: process.env.BASE_URL
      //showWarn:false,
    };
  },
  async created() {
    //执行时间  组件实例已创建，未挂载，dom不存在
    const courses = await getCourses();
    this.courses = courses;
    //批量更新价格
    //this.batchUpdate();
  },
  methods: {},
  // beforeRouteEnter(to, from, next) {
  //   //是否登录
  //   if (window.isLogin) {
  //     next();
  //   } else {
  //     next("/login?redirect=" + to.fullPath);
  //   }
  // },
  activated() {
    console.log("activated");
  },
  deactivated() {
    console.log("deactivated");
  }
};
</script>