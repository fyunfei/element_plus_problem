<template>
  <div>你好，这是{{msg}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  setup: (props) => {
    console.log(props);
    return {
      msg: "第二页",  
    };
  },
});
</script>

<style scoped>
</style>