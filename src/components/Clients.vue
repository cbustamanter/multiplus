<template>
  <div class="columns is-centered">
    <div class="column has-text-left is-10">
      <h1 class="title bold-text">Nuestros Clientes</h1>
    </div>
  </div>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Clients",
});
</script>

<style lang="scss" scoped>
h1.title {
  font-size: 50px;
  @include until($tablet) {
    font-size: 30px;
    text-align: center;
  }
}
</style>
