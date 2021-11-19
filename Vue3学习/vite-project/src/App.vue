<template>
  <!-- <H1></H1> -->
  <!-- <H1 msg="Hello Vue 3 + TypeScript + Vite">
    <template #name>
      <h1>yangejie</h1>
    </template>
    <template v-slot="{ state: state }">
      <div>
        {{ state.count }}
      </div>
    </template>
  </H1> -->
  <!-- 
  <Suspense
    @fallback="
      () => {
        return '加载中';
      }
    "
  >
    <AsyncCom />
  </Suspense> -->
  <!-- <user-info /> -->

  <Test />
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import HelloWorld from "components/HelloWorld.vue";
import UserInfo from "components/UserInfo.vue";
import AsyncCom from "components/AsyncCom.vue";
import Test from "components/Test.vue";

type FnObj = {
  name: string;
  age: number;
};

// type FnObj1 = {
//   name1: string;
//   age: number;
// };

export default defineComponent({
  name: "App",
  components: {
    AsyncCom,
    H1: HelloWorld,
    UserInfo,
    Test,
  },
  setup() {
    // 单个传参
    const getInfoConstant = (name: string, age: number): string => {
      return name + age;
    };

    // 对象传参数
    const getInfoObj = (data: FnObj): FnObj => {
      return data;
    };

    // 泛型
    function getInfo<T>(data: T): void {
      console.log(data);
    }
    if ((<FnObj>getInfoObj({ name: "yangjie", age: 18 })).name) {
      console.log("是obj1");
    } else {
    }

    getInfoObj({ name: "yangjie", age: 18 });
    getInfoConstant("yangjie", 18);
    getInfo<FnObj>({ name: "yangjie", age: 18 }); // { name: "yangjie", age: 18 }  T=>FnObj
  },
});
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
</style>
