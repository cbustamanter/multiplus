<template>
  <Navbar />  
  <router-view />
  <Footer />
  <floating-button />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import FloatingButton from "./components/FloatingButton.vue";
import "./assets/styles/scss/global.scss";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer,
    FloatingButton
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  overflow: hidden;
}
</style>
