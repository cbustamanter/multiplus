<template>
  <div class="services-container columns has-text-left is-multiline is-justify-content-center">
    <div class="column services-card first">
      <div class="columns h-100">
        <div class="column is-flex is-flex-direction-column is-justify-content-space-between is-8">
          <div class="bold-text header">
            Pantallas LED
          </div>
          <div class="msg">
            Servicios Publicitarios
          </div>
        </div>
      </div>
    </div>
    <div class="column services-card second">
      <div class="columns h-100">
        <div class="column is-flex is-flex-direction-column is-justify-content-space-between is-8">
          <div class="bold-text header">
            Paneles Publicitarios
          </div>
          <div class="msg">
            Servicios Publicitarios
          </div>
        </div>
      </div>
    </div>
    <div class="column services-card third">
      <div class="columns h-100">
        <div class="column is-flex is-flex-direction-column is-justify-content-space-between is-8">
          <div class="bold-text header">
            Asesoría y Capacitaciones
          </div>
          <div class="msg">
            Servicios Publicitarios
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Services",
});
</script>

<style lang="scss" scoped>
  .services-container {
    margin-top: -120px;
    .services-card {
      max-width: 389px;
      height: 483px;
      color: white;
      padding-left: 39px;
      padding-top: 33px;
      .header {
        font-size: 42px;
      }
      .msg {
        font-size: 23px;
      }
      &.first {
        background: #FD4750;
      }
      &.second {
        background: green;
      }
      &.third {
        background: url('../assets/images/service2.png');
      }
    }
  }
</style>
