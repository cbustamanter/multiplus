<template>
  <div class="about">
    <section-component :title="title" :subtitle="subtitle" />
    <contact-content />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ContactContent from "../components/ContactContent.vue";
import SectionComponent from "../components/SectionComponent.vue"
export default defineComponent({
  components: { ContactContent, SectionComponent },
  data() {
    return {
      title: "Contacto",
      subtitle: "Déjanos tu información y nos pondremos en contacto contigo",
    }
  },
  name: "Contact",
});
</script>

<style lang="scss" scoped>
.about {
  .about-section {
    background: url("../assets/images/contact-bg.png") no-repeat;
  }
}
</style>
