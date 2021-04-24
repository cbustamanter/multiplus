<template>
  <div class="gallery-main">
    <div class="gallery-img">
      <div v-html="gallery[index].img"></div>
    </div>
    <i class="pointer arrow left" @click="prevPhoto"></i>
    <i class="pointer arrow right" @click="nextPhoto"></i>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ProjectsGallery",
  props: ["test"],
  methods: {
    nextPhoto() {
      this.index = this.index >= this.gallery.length - 1 ? 0 : this.index + 1;
    },
    prevPhoto() {
      this.index = this.index <= 0 ? this.gallery.length - 1 : this.index - 1;
    },
  },
  data() {
    return {
      index: this.test,
      gallery: [
        { img: `<img src="src/assets/images/cortez.png" />` },
        { img: `<img src="src/assets/images/toyota.png" />` },
        { img: `<img src="src/assets/images/pizza_hut.png" />` },
        { img: `<img src="src/assets/images/panel-entel.png" />` },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.gallery-main {
  position: relative;
  padding: 4vw;
  .gallery-img {
    padding: 2vw;
    background: white;
  }
  .arrow {
    border: solid white;
    border-width: 0 7px 7px 0;
    position: absolute;
    display: inline-block;
    padding: 20px;
    top: 50%;
    &.left {
      left: 0;
      transform: rotate(135deg);
      -webkit-transform: rotate(135deg);
    }
    &.right {
      right: 0;
      transform: rotate(-45deg);
      -webkit-transform: rotate(-45deg);
    }
  }
}
</style>
