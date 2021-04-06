<template>
  <div class="about-content pt-6 pb-6">
    <div class="about-container">
      <div class="columns pt-5">
        <div class="column">
          <p class="bold-text has-text-left">Inicio / Nosotros</p>
        </div>
      </div>
      <div class="columns mb-0 pt-6">
        <div class="column pb-0 pr-0">
          <div class="columns has-text-left is-multiline">
            <div class="column is-10 header-column">
              <h2 class="subtitle md-text">CONÓCENOS</h2>
            </div>
            <div class="column is-10 title-column">
              <h1 class="title bold-text">
                Somos el Plus que tu empresa necesita.
              </h1>
            </div>
            <div class="column is-10 text-column">
              <p class="text">
                Somos una empresa expertos en servicios publicitarios siendo
                líderes en en la ciudad de Trujillo por más de 8 años.
              </p>
            </div>
          </div>
        </div>
        <div class="column pb-0 pl-0">
          <img src="../assets/images/about-img1.png" alt="image" />
        </div>
      </div>
      <div class="columns">
        <div class="column pr-0 pt-2">
          <img src="../assets/images/about-img2.png" alt="image" />
        </div>
        <div class="column pl-0">
          <div class="columns pl-6 pt-4 has-text-left is-multiline">
            <div class="column is-10 header-column">
              <h2 class="subtitle md-text">VALORES</h2>
            </div>
            <div class="column is-12 title-column">
              <div class="columns pt-5">
                <div class="column">
                  <h1 class="subtitle mb-2 bold-text">
                    Compromiso
                  </h1>
                  <div class="columns">
                    <div class="column is-10">
                      <span class="text">
                        Queremos ayudarte a cumplir tus metas
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <h1 class="subtitle mb-2 bold-text">
                    Calidad
                  </h1>
                  <div class="columns">
                    <div class="column is-10">
                      <span class="text">
                        Lo característico de nuestro trabajo
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="column is-12 title-column">
              <div class="columns pt-5">
                <div class="column">
                  <h1 class="subtitle mb-2 bold-text">
                    Experiencia
                  </h1>
                  <div class="columns">
                    <div class="column is-11">
                      <span class="text">
                        Siendo líderes en nuestra región
                      </span>
                    </div>
                  </div>
                </div>
                <div class="column">
                  <h1 class="subtitle mb-2 bold-text">
                    Pasión
                  </h1>
                  <div class="columns">
                    <div class="column is-10">
                      <span class="text">
                        Amamos lo que hacemos
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
  <Testimonies />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Testimonies from "./Testimonies.vue";
export default defineComponent({
  name: "AboutContent",
  components: { Testimonies },
});
</script>

<style lang="scss" scoped>
.about-content {  
  .about-container {
    padding-bottom: 52px;
    border-bottom: 1px solid #707070;
    margin-right: 7vw;
    margin-left: 7vw;
    .header-column {
      border-bottom: 1px solid #707070;
      h2 {
        &.subtitle {
          font-size: 20px;
          letter-spacing: 1.2px;
        }
      }
    }
    .title-column {
      h1 {
        &.title {
          font-size: 56px;
        }
        &.subtitle {
          font-size: 39px;
        }
      }
    }
    .text {
      font-size: 23px;
      letter-spacing: 0.23px;
    }
  }
}
</style>
