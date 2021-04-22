<template>
  <div class="services-container columns has-text-left is-multiline is-justify-content-center">
    <div class="column is-3 services-card first">
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
    <div class="column is-3 services-card second">
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
    <div class="column is-3 services-card third">
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
    @include until ($tablet) {
      margin-top: 0px;
      padding-top: 68px;
    }
    .services-card {
      height: 350px;
      @include until ($tablet) {
        height: 200px;
      }
      @include from ($fullhd) {
        max-width: 389px;
        height: 483px;
      }
      color: white;
      padding-left: 39px;
      @include from ($tablet) {
        padding-left: 20px;
      }
      padding-top: 33px;
      .header {
        @include from ($fullhd) {
          font-size: 42px !important;
        }
        @include from ($tablet) {
          font-size: 23px;
        }
        @include until ($tablet) {
          font-size: 20px;
        }
        font-size: 27px;
      }
      .msg {
        font-size: 23px;
        @include from ($tablet) {
          font-size: 19px;
        }
        @include until ($tablet) {
          font-size: 16px;
        }
      }
      &.first {
        background: url('../assets/images/service3.png');
      }
      &.second {
        background: url('../assets/images/service1.png');
      }
      &.third {
        background: url('../assets/images/service2.png');
      }
    }
  }
</style>
