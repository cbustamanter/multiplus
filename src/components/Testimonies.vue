<template>
  <div class="testimonies-content">
    <div class="testimonies-container">
      <div class="columns">
        <div class="column">
          <h2 class="subtitle md-text">testimonios</h2>
          <h1 class="title bold-text">
            Que dicen nuestros clientes sobre nosotros
          </h1>
        </div>
        <div class="column">
          <div class="columns">
            <div class="column is-narrow">
              <figure class="image is-128x128">
                <img
                  class="is-rounded"
                  src="https://bulma.io/images/placeholders/128x128.png"
                />
              </figure>              
            </div>
            <div class="column is-flex is-flex-direction-column is-justify-content-center">
                <p class="text md-text">Javier Rodriguez</p>
                <p class="text">Jefe de Marketing Entel</p>
              </div>
          </div>
          <div class="columns">
            <div class="column is-10">
              <p class="text">Me gusta trabajar on Multiplus porque son muy responsables y me ayudan a cumplir mis objetivos</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Testimonies",
});
</script>

<style lang="scss" scoped>
.testimonies-content {
  padding-bottom: 10vh;
  text-align: left;
  .testimonies-container {
    margin-right: 7vw;
    margin-left: 7vw;
    .subtitle {
      text-transform: uppercase;
      font-size: 20px;
    }
    .title {
      font-size: 56px;
    }
    .text {
      font-size: 23px;
    }
  }
}
</style>
