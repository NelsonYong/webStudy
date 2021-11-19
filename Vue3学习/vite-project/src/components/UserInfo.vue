<template>
  <div>
    <h1>当前状态：{{ loginText }}</h1>
    {{ a }}
    <button @click="a++">增加</button>
    <button @click="reduce()">减少</button>
    <button @click="login()">登录</button>
    <button @click="exit()">退出登录</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity";
import { computed } from "vue";
import { useYStore } from "../hooks";
import { GET_DATA } from "../store/modules/user/constant";

const { state: ydata, getters, dispatch } = useYStore();
const loginText = computed(() => {
  return getters["user/isLogin"];
});

console.log(ydata);

const a = ref<number>(1);
const reduce = () => {
  a.value--;
};
const login = () => {
  dispatch(`user/${GET_DATA}`, true);
};
const exit = () => {
  dispatch(`user/${GET_DATA}`, false);
};
</script>
<style lang=""></style>
