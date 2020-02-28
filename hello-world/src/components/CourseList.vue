<template>
    <div>
        <p v-if="courses.length==0">没有任何课程信息</p>
        <div class="course-list" v-else>
                <div v-for="(item,k) in courses" :key="item.name+k"
                :style="{backgroundColor:selectedCourse===(item.name+k)?'#ddd':'transparent'}"
                @click="onClick(item,k)">
                 {{ item.name+k }} - {{ item.price | currency('￥')}}
                    <!-- <router-link :to="`/admin/course/${item.name}`">
                        {{ item.name+k }} - {{ item.price | currency('￥')}}
                    </router-link> -->
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
             },
             methods: {
                 onClick(item,k) {
                     this.selectedCourse=(item.name+k);
                    //  this.$router.push(`/admin/course/${item.name}`)
                    this.$router.push({
                        name:'detail',
                        params:{name:item.name}
                    })
                     
                 }
             },
    }
</script>

<style lang="scss" scoped>
 .active{
        background-color: #ddd;
    }
</style>