<template>
  <div class="advertising-container columns">
    <div class="column is-flex">
      <img src="../../assets/images/slider/slider1.png" alt="panels" />
    </div>
    <div
      class="column text-container is-flex is-flex-direction-column is-justify-content-center has-text-left"
    >
      <div class="columns is-multiline">
        <div class="column is-6-fullhd is-9-desktop is-12">
          <h1 class="title bold-text">
            Paneles Publicitarios
          </h1>
        </div>
        <div class="column is-10">
          <h2 class="subtitle">
            Brindamos Soportes Publicitarios ubicados sobre propiedades privadas
            o torres unipolares de aproximadamente 14m de altura.
            <br />
            <br />
            Impresión directa en lona en sistema de impresión punto por punto en
            gran definición. Opción de tirar periódicamente dando sensación de
            estar En más de un lugar a la vez
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slider1",
});
</script>

<style lang="scss" scoped>
.advertising-container {
  padding: 141px 0px 120px 0px;
  @include until($tablet) {
    padding: 60px 0px 40px 0px;
  }
  .is-flex {
    @include until($tablet) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .text-container {
    padding-left: 3rem;
    @include until($tablet) {
      padding-left: 2rem;
      padding-right: 1rem;
    }
    .title {
      font-size: 56px;
      @include until($tablet) {
        font-size: 30px;
      }
    }
    .subtitle {
      font-size: 17px;
      @include until($tablet) {
        font-size: 14px;
      }
    }
  }
}
</style>
