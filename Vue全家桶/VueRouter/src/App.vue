<template>
  <div id="app">
    <!-- <button>首页</button>
   <button>关于</button> -->
    <!-- <router-link to="/home" tag="button"  replace  active-class='active'>首页</router-link>
   <router-link to="/about" tag="button"  replace active-class='active'>关于</router-link> -->


    <router-link to="/home/news" tag="button">首页</router-link>
    <router-link to="/about" tag="button">关于</router-link>
    <!-- <router-link v-bind:to="'/user/'+id" tag="button">用户</router-link>
    <router-link :to="{path:'/profile',query:{name:'yangjie',age:'18',height:'175'}}" tag="button">档案</router-link> -->

    <button @click="user">用户</button>
    <button @click="profile">档案</button>
    <!-- <button @click="homeclick">首页</button>
   <button @click="aboutclick">关于</button>
    <button @click="userclick">用户</button> -->

    <keep-alive exclude="profile">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data() {
      return {
        id: "zhansan"
      }
    },
    methods: {
      user() {
        this.$router.push('/user/' + this.id)
      },
      profile() {
        this.$router.push({
          path: '/profile/',
          query: {
            name: 'yangjie',
            age: '18',
            height: '180'

          }
        })
      }
    }

    //   homeclick(){
    //   // this.$router.push("/home")
    //   this.$router.replace("/home")
    //   },
    //    aboutclick(){
    //   this.$router.replace("/about")
    //   },
    //     userclick(){
    //   this.$router.replace("/user")
    //   }
    // }
  }
</script>

<style>
  .active {
    color: red;
  }
</style>