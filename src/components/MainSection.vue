<template>
  <section class="hero main-section is-fullheight">
    <div class="hero-body">
      <div class="main-content">
        <div class="columns">
          <div class="column is-offset-1 is-5-fullhd is-7-desktop">
            <p class="title bold-text has-text-left has-text-white">
              Tenemos la solución para tu negocio
            </p>
          </div>
        </div>
        <div class="columns ml-2">
          <div class="column custom-btn is-offset-1 is-narrow">
            <div class="columns is-mobile">
              <div class="column is-narrow-tablet has-text-white py-1 pl-4 pr-0">
                <span>Ver Video</span>
              </div>
              <div class="column centered is-narrow-tablet py-1">
                <img src="../assets/svg/right-arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "MainSection",
});
</script>

<style lang="scss" scoped>
.main-section {
  background: url("../assets/images/main-section1.png") no-repeat;
  background-size: cover;
  .main-content {
    p {
      font-size: 100px;
      font-weight: bold;
      letter-spacing: 0px;
    }
    .custom-btn {
      border: 1px solid #ff0000;
      border-radius: 11px;
      span {
        font-size: 29px;
        font-weight: lighter;
      }
    }
  }
}
</style>
