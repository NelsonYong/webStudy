<template>
  <div>
    <h2>我是首页</h2>
    <p>我是首页内容</p>
    <router-link to="/home/news" tag="button">新闻</router-link>
    <router-link to="/home/mes" tag="button">活动</router-link>

    <router-view></router-view>
  </div>

</template>

<script>
  export default {
    name: "Home",
    data () {
      return {
        path:'home/news'
      }
    },
    created(){
    
      console.log('create')
     
    },

    //只有含keep-alive的时候这个函数才有效
    activated(){

      this.$router.push(this.path)

    },
   beforeRouteLeave(to, from, next){
  
     this.path=this.$route.path
     next()
   }

  }
</script>
<style scoped>
</style>