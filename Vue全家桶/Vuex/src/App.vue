<template>
  <div id="app">
    <h2>{{mes}}</h2>
    <h2>{{$store.state.counter}}</h2>

    <el-button type="primary" @click="add()">+</el-button>
    <el-button type="primary" @click="reduce()">-</el-button>
    <el-button type="primary" @click="add_five(5)">+5</el-button>
    <el-button type="primary" @click="add_ten()">+10</el-button>
    <el-button type="primary" @click="add_stu()">添加学生</el-button>

    <h2>{{$store.state.info}}</h2>
    <el-button type="primary" @click="updata_info()">修改数据</el-button>


    <h2>模块学生信息</h2>
    <h2>{{$store.state.stumod.mes}}</h2>

    
    <h2>模块老师信息</h2>
    <h2>{{$store.state.teamod.mes}}</h2>


    <HelloVuex></HelloVuex>
    <h2>counter的平方{{$store.getters.pow}}</h2>
    <h2>学生年龄筛选：</h2>
    <h2 v-for="(item, index) in $store.getters.getstu" :key="index">{{index+1}}、{{item.name}}</h2>
    <h2>长度:{{$store.getters.getstulenth}}</h2>
    <el-input v-model.number="age" placeholder="请输入年龄" @blur="setage()"></el-input>
    <h2>{{stu}}</h2>
    <h2>添加学生一览</h2>
    <h2>{{$store.state.students}}</h2>
  </div>
</template>

<script>
  import HelloVuex from './components/HelloVuex'
  export default {
    name: 'App',
    data() {
      return {
        mes: '首页',
        counter: 0,
        age: null,
        stu: '',
        stumes: [

          {
            name: 'ggg',
            age: 19
          },
          {
            name: 'yyy',
            age: 14
          },
          {
            name: 'kkk',
            age: 29
          },


        ]
      }
    },
    components: {
      HelloVuex,
    },
    methods: {
      add() {
        //调用store里面的方法
        this.$store.commit('add')
      },
      reduce() {

        this.$store.commit('reduce')

      },
      setage() {
        console.log('666')
        this.stu = this.$store.getters.getstuage(this.age)
      },
      add_five(count) {
        //1.普通的提交风格
        this.$store.commit('add_', count)

        //2.特殊的提交风格--提交的是个对象
        // this.$store.commit({
        //   type:'add_',
        //   count
        // })

      },
      add_ten() {
        this.$store.commit('add_', 10)
      },
      add_stu() {

        for (let index = 0; index < this.stumes.length; index++) {
          this.$store.commit('add_stumes', this.stumes[index])

        }
      },

      updata_info() {

        // this.$store.dispatch('aupdata',{
        //   type:'我是数据',
        //   success:()=>{
        //    console.log('成功获取')
        //   }
        // })

        this.$store.dispatch('aupdata','我是消息').then((res)=>{
          console.log(res)
        })

      }


    }
  }
</script>

<style>

</style>