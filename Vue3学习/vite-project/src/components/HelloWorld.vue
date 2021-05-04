<template>
  <h1>{{ msg }}</h1>
  <button @click="state.count++">count is: {{ state.count }}</button>
  <!-- <v-btn block> Block Button </v-btn> -->
</template>

<script lang="ts">
import { defineComponent, reactive } from "vue";
export default defineComponent({
  props: {
    msg: String,
  },
  setup({ msg }) {
    const state = reactive({ count: 0 });
    return {
      state,
      msg,
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
