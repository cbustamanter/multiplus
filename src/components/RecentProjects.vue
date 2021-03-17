<template>
  <div class="columns is-centered">
    <div class="column has-text-left is-10">
      <h1 class="title bold-text">
        Proyectos Recientes
      </h1>
    </div>
  </div>
  <div class="projects-container is-centered columns container is-fluid is-multiline">
    <div class="column is-flex is-flex-direction-column is-3">
      <img src="../assets/images/cortez.png" alt="cortez">
      <div class="has-text-left">
        <h2 class="title bold-text">Cortez</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column tyt-col is-8">
        <img src="../assets/images/toyota.png" alt="toyota">
      <div class="has-text-left">
        <h2 class="title bold-text">Toyota</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column is-7">
        <img src="../assets/images/donofrio-panel.png" alt="cortez">
      <div class="has-text-left">
        <h2 class="title bold-text">Donofrio</h2>
        <h3 class="subtitle md-text">Panel Publicitario</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column tyt-col2 is-4">
        <img src="../assets/images/toyota-panel.png" alt="toyota">
      <div class="has-text-left">
        <h2 class="title bold-text">Toyota</h2>
        <h3 class="subtitle md-text">Panel Publicitario</h3>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "RecentProjects",
});
</script>

<style lang="scss" scoped>
  h1.title {
    font-size: 50px;
    @include until ($tablet) {
      font-size: 30px;
      text-align: center;
    }
  }
  .projects-container {
    @include from ($fullhd) {
      margin-left: 10px;
    }
    h2.title {
      font-size: 36px;
      @include until ($tablet) {
        font-size: 20px;
      }
    }
    h3.subtitle {
      font-size: 16px;
      @include until ($tablet) {
        font-size: 12px;
      }
    }
    .tyt-col {
      @include from ($fullhd) {
        margin-left: 68px;
      }
    }
    .tyt-col2 {
      @include from ($fullhd) {
        margin-left: 72px;
      }
    }
  }
</style>
