<template>
  <div class="home">
    <MainSection />
    <Services />
    <AdvertisingPanels />
    <RecentProjects />
    <Clients />
    <LetsTalk />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Clients from "../components/Clients.vue";
import LetsTalk from "../components/LetsTalk.vue";
import Footer from "../components/Footer.vue";
import MainSection from "../components/MainSection.vue";
import Navbar from "../components/Navbar.vue";
import Services from "../components/Services.vue";
import AdvertisingPanels from "../components/AdvertisingPanels.vue";
import RecentProjects from "../components/RecentProjects.vue";

export default defineComponent({
  name: "Home",
  components: {
    RecentProjects,
    AdvertisingPanels,
    MainSection,
    Navbar,
    Services,
    Clients,
    LetsTalk,
    Footer,
  },
});
</script>
