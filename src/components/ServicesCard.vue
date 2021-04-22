<template>
  <div class="columns service-card">
    <div v-for="card in cards" class="column service-card-container">
      <div class="service-card-content">
        <div class="card-image" v-html="card.img">
        </div>
        <div class="card-text md-text">
          {{ card.text }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: "ServicesCard",
  props: ['cards'],
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

    .service-card-content {
      border-radius: 4px;
      width: 65%;
      padding: 2rem 0;
      border: 1px solid rgba(112, 112, 112, 0.17);
      .card-text {
        max-width: 79%;
        margin: 0 auto;
        line-height: 1;
      }

      .card-image {
        fill: $multi-red;
      }

      &:hover {
        color: white;
        background: $multi-red;

        .card-image {
          fill: white;
        }
      }

    }
  }
}
</style>
