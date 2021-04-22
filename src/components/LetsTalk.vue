<template>
  <div class="lets-talk-container">
    <div class="columns is-centered">
      <div class="column py-0 has-text-left is-10">
        <h2 class="subtitle">Conversemos</h2>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column has-text-left is-7 bordered-title">
        <h1 class="title bold-text">¿Tienes un proyecto?</h1>
      </div>
      <div class="column has-text-right-tablet is-3 bordered-title">
        <button class="button is-large contact-btn">Contáctanos</button>
      </div>
    </div>
    <div class="columns is-centered">
      <div class="column has-text-left-tablet is-10">
        <p class="subtitle">
          We’re a team of creatives who are excited about unique ideas and help
          digital and fin-tech companies to create amazing identity by crafting
          top-notch UI/UX.
        </p>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "LetsTalk",
});
</script>

<style lang="scss" scoped>
.lets-talk-container {
  padding-bottom: 139px;
  @include until($tablet) {
    padding-bottom: 40px;
  }
  h1.title {
    font-size: 50px;
    @include until($tablet) {
      font-size: 30px;
      text-align: center;
    }
  }
  h2.subtitle {
    font-size: 23px;
    text-transform: uppercase;
    @include until($tablet) {
      font-size: 15px;
      text-align: center;
    }
  }
  p.subtitle {
    padding-top: 10px;
    font-size: 23px;
    max-width: 65%;
    @include until($tablet) {
      font-size: 15px;
      text-align: center;
      max-width: 100%;
    }
  }
  .bordered-title {
    border-bottom: 1px solid #707070;
    padding-bottom: 50px;
    @include until($tablet) {
      padding-bottom: 12px;
    }
  }
  .contact-btn {
    border: 1px solid #707070;
    font-family: "Helvetica Bold";
    @include until($tablet) {
      font-size: 0.9rem;
    }

  }
}
</style>
