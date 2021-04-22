<template>
  <section class="hero is-large about-section is-link">
    <div class="hero-body">
      <div class="columns">
        <div class="column has-text-left is-offset-1 is-4">
          <h1 class="title bold-text">{{ title }}</h1>
          <h2 v-if="subtitle" class="subtitletext"> {{subtitle}}</h2>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: ['title', 'subtitle'],
  name: "SectionsComponent",
});
</script>

<style lang="scss" scoped>
  .about {
    .about-section {
      background-size: cover;
      @include until ($tablet) {
        background-position: top !important;
      }
      .hero-body {
        @include until ($tablet) {
          padding: 8rem 1.5rem 4rem 1.5rem;
        }
      }
      h1 {
        &.title {
          font-size: 73px;
          @include until ($tablet) {
            font-size: 40px;
          }
        }
      }
      h2 {
        &.subtitletext {
          font-size: 23px;
          @include until ($tablet) {
            font-size: 18px;
          }
        }
      }
    }
  }
</style>
