<template>
  <div class="advertising-container columns">
    <div class="column is-flex">
      <img src="../../assets/images/pizza_hut.png" alt="panels" />
    </div>
    <div
      class="column text-container is-flex is-flex-direction-column is-justify-content-center has-text-left"
    >
      <div class="columns is-multiline">
        <div class="column is-6-fullhd is-9-desktop is-12">
          <h1 class="title bold-text">
            Letreros Luminosos
          </h1>
        </div>
        <div class="column is-10">
          <h2 class="subtitle">
            Llama la atención de tus clientes con letreros luminosos para la
            fachada de tu negocio. También úsalos en interiores promocionando
            tus productos o servicios. Estos pueden ser creados en acrílico,
            aluminio, MDF o PVC.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Slider2",
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