<template>
  <div class="projects-container columns is-multiline">
    <div class="column has-text-left is-12">
      <h1 class="title bold-text">
        Proyectos Recientes
      </h1>
    </div>
    <div class="column is-narrow">
      <div>
        <img src="../assets/images/cortez.png" alt="cortez">
      </div>
      <div class="has-text-left">
        <h2 class="title bold-text">Cortez</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column tyt-col is-narrow">
      <div>
        <img src="../assets/images/toyota.png" alt="toyota">
      </div>
      <div class="has-text-left">
        <h2 class="title bold-text">Toyota</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column is-narrow">
      <div>
        <img src="../assets/images/donofrio-panel.png" alt="cortez">
      </div>
      <div class="has-text-left">
        <h2 class="title bold-text">Donofrio</h2>
        <h3 class="subtitle md-text">Panel Publicitario</h3>
      </div>
    </div>
    <div class="column tyt-col2 is-narrow">
      <div>
        <img src="../assets/images/toyota-panel.png" alt="toyota">
      </div>
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
  .projects-container {
    padding: 120px 160px 153px 160px;
    h1.title {
      font-size: 50px;
    }
    h2.title {
      font-size: 36px;
    }
    h3.subtitle {
      font-size: 16px;
    }
    .tyt-col {
      margin-left: 68px;
    }
    .tyt-col2 {
      margin-left: 72px;
    }
  }
</style>
