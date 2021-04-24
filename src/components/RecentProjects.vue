<template>
  <div class="columns is-centered">
    <div class="column has-text-left is-10">
      <h1 class="title bold-text">
        Proyectos Recientes
      </h1>
    </div>
  </div>
  <div
    class="projects-container is-centered columns container pb-6 is-fluid is-multiline"
  >
    <div class="column is-flex is-flex-direction-column is-3">
      <img
        src="../assets/images/cortez.png"
        @click="openGallery(0)"
        alt="cortez"
        class="zoom-in"
      />
      <div class="has-text-left">
        <h2 class="title bold-text">Cortez</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column tyt-col is-8">
      <img
        src="../assets/images/toyota.png"
        @click="openGallery(1)"
        alt="toyota"
        class="zoom-in"
      />
      <div class="has-text-left">
        <h2 class="title bold-text">Toyota</h2>
        <h3 class="subtitle md-text">Instalación Letras Volumétricas</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column is-7">
      <img
        src="../assets/images/pizza_hut.png"
        @click="openGallery(2)"
        alt="cortez"
        class="zoom-in"
      />
      <div class="has-text-left">
        <h2 class="title bold-text">Pizza Hut</h2>
        <h3 class="subtitle md-text">Panel Publicitario</h3>
      </div>
    </div>
    <div class="column is-flex is-flex-direction-column tyt-col2 is-4">
      <img
        src="../assets/images/panel-entel.png"
        @click="openGallery(3)"
        alt="toyota"
        class="zoom-in"
      />
      <div class="has-text-left">
        <h2 class="title bold-text">Entel</h2>
        <h3 class="subtitle md-text">Panel Publicitario</h3>
      </div>
    </div>
  </div>
  <vue-final-modal
    v-if="showModal"
    v-model="showModal"
    classes="modal-container"
    content-class="modal-content"
  >
    <projects-gallery :test="galleryIndex" />
  </vue-final-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectsGallery from "./ProjectsGallery.vue";

export default defineComponent({
  name: "RecentProjects",
  components: { ProjectsGallery },
  methods: {
    openGallery(index: number) {
      this.galleryIndex = index;
      this.showModal = true;
    },
  },
  data() {
    return {
      showModal: false,
      galleryIndex: 0,
    };
  },
});
</script>

ProjectsGallery<style lang="scss" scoped>
h1.title {
  font-size: 50px;
  @include until($tablet) {
    font-size: 30px;
    text-align: center;
  }
}
.projects-container {
  img {
    height: 100%;
  }
  @include from($fullhd) {
    margin-left: 10px;
  }
  h2.title {
    font-size: 36px;
    @include until($tablet) {
      font-size: 20px;
    }
  }
  h3.subtitle {
    font-size: 16px;
    @include until($tablet) {
      font-size: 12px;
    }
  }
  .tyt-col {
    @include from($fullhd) {
      margin-left: 68px;
    }
  }
  .tyt-col2 {
    @include from($fullhd) {
      margin-left: 72px;
    }
  }
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  margin: 0 1rem;
  padding: 1rem;
  border-radius: 0.25rem;
  align-items: center;
  width: auto !important;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
