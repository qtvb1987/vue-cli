<template>
    <div>
        <p v-if="courses.length==0">没有任何课程信息</p>
        <div class="course-list" v-else>
                <div v-for="(item,k) in courses" :key="item.name+k"
                :style="{backgroundColor:selectedCourse===(item.name+k)?'#ddd':'transparent'}"
                @click="selectedCourse=(item.name+k)">
                    <router-link :to="`/course/${item.name}`">
                        {{ item.name+k }} - {{ item.price | currency('￥')}}
                    </router-link>
                </div>
        </div>
    </div>
</template>

<script>
    export default {
           //课程列表组件
          data(){
                 return {
                     selectedCourse:'',
                 }
             },
             props:{
                 courses:{
                     type:Array,
                     default:function ()  {
                         return []
                     }
                 }
             }, 
             filters:{
                 currency(value,symbol='￥'){
                     return symbol+value
                 }
             }
    }
</script>

<style lang="scss" scoped>
 .active{
        background-color: #ddd;
    }
</style>