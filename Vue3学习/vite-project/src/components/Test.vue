<template>
  <div>数值：{{ state.count }}</div>
  <button @click="add()">add</button>
  <button @click="desc('yyyyyy')">test</button>
  <!-- <div>result:{{ desc }}</div> -->
</template>

<script lang="ts">
import { computed, defineComponent, reactive, watch } from "vue";
export default defineComponent({
  name: "",
  props: {},
  setup: () => {
    const state = reactive({ count: 1 });

    const add = () => {
      state.count++;
    };

    const desc = computed(() => {
      return function (name: string) {
        console.log(`当前结果为：${state.count} ${name}`);
        return `当前结果为：${state.count} ${name}`;
      };
    });

    watch(
      () => state.count,
      (val, pre) => {
        console.log(val);
      }
    );

    //     const obj = getname()
    //  const name =  obj.name ?? 'name'

    return {
      state,
      add,
      desc,
    };
  },
});
</script>

<style scoped lang="less"></style>
