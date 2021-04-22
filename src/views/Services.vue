<template>
  <div class="about">
    <section-component :title="title" :subtitle="subtitle" />
    <services-content />
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ServicesContent from "../components/ServicesContent.vue";
import SectionComponent from "../components/SectionComponent.vue";

export default defineComponent({
  components: {ServicesContent, SectionComponent},
  data() {
    return {
      title: "Servicios",
      subtitle: "Los mejores letreros para anunciar tu empresa o negocio",
    }
  },
  name: "Services",
});
</script>

<style lang="scss" scoped>
.about {
  .about-section {
    background: url("../assets/images/services-bg.png") no-repeat;
  }
}
</style>
