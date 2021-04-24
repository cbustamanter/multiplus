<template>
  <transition name="component-fade" mode="out-in">
    <component :is="sliders[index].name"/> 
  </transition>
</template>

<script lang="ts">
import { defineComponent, defineAsyncComponent } from "vue";

import Slider1 from "./Sliders/Slider1.vue";
import Slider2 from "./Sliders/Slider2.vue";
export default defineComponent({
  name: "AdvertisingPanels",
  components: { Slider1, Slider2 },
  data() {
    return {
      index: 0,
      slider: 'Slider2',
      sliders: [{name: 'Slider1'}, {name:'Slider2'}]
    };
  },
    mounted() {
    setInterval(() => {
      console.log(this.index)
      this.index = this.index >= 1 ? 0 : this.index +1;
    }, 6000);
  },
});
</script>

<style lang="scss" scoped>
.advertising-container {
  padding: 141px 0px 120px 0px;
  @include until($tablet) {
    padding: 60px 0px 40px 0px;
  }
  .is-flex {
    @include until($tablet) {
      padding-left: 0px;
      padding-right: 0px;
    }
  }
  .text-container {
    padding-left: 3rem;
    @include until($tablet) {
      padding-left: 2rem;
      padding-right: 1rem;
    }
    .title {
      font-size: 56px;
      @include until($tablet) {
        font-size: 30px;
      }
    }
    .subtitle {
      font-size: 17px;
      @include until($tablet) {
        font-size: 14px;
      }
    }
  }
}
.component-fade-enter-active,
.component-fade-leave-active {
  transition: opacity 1s ease;
}

.component-fade-enter-from,
.component-fade-leave-to {
  opacity: 0;
}
</style>
