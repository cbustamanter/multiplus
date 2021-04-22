<template>
  <div class="about">
    <section-component :title="title" />
    <about-content />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AboutContent from "../components/AboutContent.vue";
import SectionComponent from "../components/SectionComponent.vue"
export default defineComponent({
  components: { AboutContent, SectionComponent },
  data() {
    return {
      title: "Acerca de Nosotros",
    }
  },
  name: "About",
});
</script>

<style lang="scss" scoped>
  .about {
    .about-section {
      background: url("../assets/images/about-bg.png") no-repeat;
    }
  }
</style>
