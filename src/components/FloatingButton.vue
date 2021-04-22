<template>
  <div class="floating" @click="open">
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "FloatingButton",
  methods: {
    open() {
      window.open('https://api.whatsapp.com/send?phone=51948311903')
    }
  }
});
</script>

<style lang="scss" scoped>
  .floating {
    position: fixed;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    top: 93%;
    right: 5px;
    cursor: pointer;
    background: #e8e8e8 url("../assets/images/wsp-logo.png") no-repeat bottom;
    background-size: cover;
    @include until($tablet) {
      width: 40px;
      height: 40px;
    }
  }
</style>
