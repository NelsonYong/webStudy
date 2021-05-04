<template>
  <div>
    <h2>我是张三</h2>
  <h2>{{$route.params.id}}</h2>
  </div>
</template>

<script>
export default {

name:"User",

    computed: {
      userid(){
        return this.$route.params.id
      }
    }
    // methods: {
}

</script>
<style scoped>
</style>