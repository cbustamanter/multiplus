<template>
  <Navbar/>
  <MainSection />
  <Services />
  <AdvertisingPanels />
  <RecentProjects />
  <Clients />
  <LetsTalk />
  <Footer />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Clients from "./components/Clients.vue";
import LetsTalk from "./components/LetsTalk.vue";
import Footer from "./components/Footer.vue";
import MainSection from './components/MainSection.vue'
import Navbar from './components/Navbar.vue'
import Services from "./components/Services.vue";
import './assets/styles/scss/global.scss'
import AdvertisingPanels from "./components/AdvertisingPanels.vue";
import RecentProjects from "./components/RecentProjects.vue";

export default defineComponent({
  name: 'App',
  components: {
    RecentProjects,
    AdvertisingPanels,
    MainSection,
    Navbar,
    Services,
    Clients,
    LetsTalk,
    Footer
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
  overflow: hidden;
}
</style>
