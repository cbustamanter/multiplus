<template>
  <Navbar />  
  <router-view />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Footer from "./components/Footer.vue";
import Navbar from "./components/Navbar.vue";
import "./assets/styles/scss/global.scss";

export default defineComponent({
  name: "App",
  components: {
    Navbar,
    Footer,
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  overflow: hidden;
}
</style>
