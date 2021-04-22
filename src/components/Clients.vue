<template>
  <div class="columns is-centered">
    <div class="column has-text-left is-10">
      <h1 class="title bold-text">Nuestros Clientes</h1>
    </div>
  </div>
  <div class="columns is-mobile clients-container is-multiline">
    <div class="column is-3"><img src="../assets/images/logos/mallplaza.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/oechsle.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/bosch.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/claro.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/lapositiva.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/viva.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/cajatrujillo.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/carsa.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/volkswagen.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/barrick.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/directv.png" alt="mall"></div>
    <div class="column is-3"><img src="../assets/images/logos/interbank.png" alt="mall"></div>
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
.clients-container {
  padding: 3vh 12vw;
  .column {
    padding-bottom: 2rem;
  }
}
</style>
