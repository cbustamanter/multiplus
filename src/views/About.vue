<template>
  <div class="about">
    <section class="hero is-large about-section is-link">
      <div class="hero-body">
        <div class="columns">
          <div class="column is-4">
            <h1 class="title bold-text">Acerca de Nosotros</h1>
          </div>
        </div>        
      </div>
    </section>
    <about-content />
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import AboutContent from "../components/AboutContent.vue";
export default defineComponent({
  components: { AboutContent },
  name: "About",
});
</script>

<style lang="scss" scoped>
.about {
  .about-section {
    background: url("../assets/images/about-bg.png") no-repeat;
    background-size: cover;
    h1 {
      &.title {
        font-size: 73px;
      }
    }
  }
}
</style>
