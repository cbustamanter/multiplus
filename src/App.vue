<template>
  <Navbar/>
  <section class="hero is-link is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <p class="title">
          <img alt="Vue logo" src="./assets/logo.png" />
          <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
        </p>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Navbar from './components/Navbar.vue'
import './assets/styles/scss/global.scss'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Navbar
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>