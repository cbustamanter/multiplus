<template>
  <div class="columns service-card">
    <div
      v-for="card in cards"
      class="column service-card-container"
      :key="card"
    >
      <div class="service-card-content">
        <div class="card-image" v-html="card.img"></div>
        <div class="card-text md-text">
          {{ card.text }}
        </div>
        <p class="hidden-text">el texto es de prueba</p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ServicesCard",
  props: ["cards"],
});
</script>

<style lang="scss" scoped>
.service-card {
  .service-card-container {
    height: 200px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    align-items: center;
    font-size: 23px;
    pointer-events: none;
    &:hover {
      .service-card-content {
        color: white;
        background: $multi-red;
        padding: 3.5rem 0;
        .card-image {
          fill: white;
          display: none;
        }
        .hidden-text {
          display: block;
        }
      }
    }
    .service-card-content {
      pointer-events: auto;
      border-radius: 4px;
      width: 65%;
      padding: 2rem 0;
      border: 1px solid rgba(112, 112, 112, 0.17);
      transition: padding .7s ease;
      .card-text {
        max-width: 79%;
        margin: 0 auto;
        line-height: 1;
      }
      .hidden-text {
        display: none;
      }

      .card-image {
        fill: $multi-red;
      }
    }
  }
}
</style>
