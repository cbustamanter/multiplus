<template>
  <div v-html="frame"></div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ModalVideo",
  props: ['frame'],
});
</script>

<style scoped>

</style>
