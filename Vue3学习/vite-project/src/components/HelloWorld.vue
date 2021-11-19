<template>
  <h1>{{ msg }}</h1>
  <slot name="name" :state="state"></slot>
  <slot :state="state"></slot>
  <button @click="state.count++" :style="style">
    count is: {{ state.count }}
  </button>
</template>

<script lang="ts">
import { CSSProperties, defineComponent, reactive, ref } from "vue";
export default defineComponent({
  props: {
    msg: String,
  },

  setup({ msg }) {
    const state = reactive({ count: 0 });
    const style = ref<CSSProperties>({
      backgroundColor: "red",
    });

    return {
      state,
      msg,
      style,
    };
  },
});
</script>
<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
