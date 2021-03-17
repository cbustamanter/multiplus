<template>
  <div class="advertising-container columns">
    <div class="column">
      <img src="../assets/images/panels-background.png" alt="panels">
    </div>
    <div class="column pl-6 is-flex is-flex-direction-column is-justify-content-center has-text-left">
      <div class="columns is-multiline">
        <div class="column is-6">
          <h1 class="title bold-text">
            Paneles Publicitarios
          </h1>
        </div>
        <div class="column is-10">
          <h2 class="subtitle md-text">
            Brindamos Soportes Publicitarios ubicados sobre propiedades privadas o torres unipolares de aproximadamente 14m de altura.
            <br>
            <br>
            Impresión directa en lona en sistema de impresión punto por punto en gran definición. Opción de tirar periódicamente dando sensación de estar En más de un lugar a la vez
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "AdvertisingPanels",
});
</script>

<style lang="scss" scoped>
  .advertising-container {
    padding: 141px 0px 0px;
    .title {
      font-size: 56px;
    }
    .subtitle {
      font-size: 17px;
    }
  }
</style>
