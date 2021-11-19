<template>
  <div></div>
</template>

<script lang="ts">
import { defineAsyncComponent } from "vue";
export default defineAsyncComponent({
  loader: () => import("./UserInfo.vue"),
  delay: 2000,
  timeout: 3000,
});
</script>

<style scoped lang="less"></style>
