<template>
  <div class="contact-content">
    <div class="contact-container">
      <div class="columns pt-5">
        <div class="column">
          <p class="bold-text has-text-left">Inicio / Contacto</p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h1 class="header-title bold-text has-text-left">Ponte en contacto</h1>
        </div>
      </div>
      <div class="columns contact-content">
        <div class="column">
          <h2 class="bold-text has-text-left">Dirección</h2>
          <div class="columns">
            <div class="column is-8 has-text-left">
              Jr. Mantaro 385 - Urb. El Molino Trujillo, Perú
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="bold-text has-text-left">Horario de Atención:</h2>
          <div class="columns">
            <div class="column is-6 has-text-left">
              Lunes a Viernes <br/>
              9:00 am a 7:00 pm
            </div>
            <div class="column has-text-left">
              Sábado <br/>
              9:00 a 1:00 pm
            </div>
          </div>
        </div>
        <div class="column">
          <h2 class="bold-text has-text-left">Teléfono / Celular</h2>
          <div class="columns">
            <div class="column is-8 has-text-left">
              (044) 290284 <br/>
              +51 948 311 903
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ContactContent"
}
</script>

<style lang="scss" scoped>
.contact-content {
  padding-bottom: 15vh;
  @include until ($tablet) {
    padding-bottom: 5vh;
  }
  .contact-container {
    margin-right: 7vw;
    margin-left: 7vw;

    .header-title {
      font-size: 39px;
    }
    .contact-content {
      font-size: 23px;
    }
  }
}
</style>
