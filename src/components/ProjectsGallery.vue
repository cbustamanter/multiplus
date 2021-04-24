<template>
  <div class="gallery-main">
    <div class="gallery-img">
      <div>
        <img
          v-if="index == 0"
          src="../assets/images/gallery/cortez_gallery.png"
          alt="cortez"
        />
        <img
          v-if="index == 1"
          src="../assets/images/gallery/toyota_gallery.png"
          alt="cortez"
        />
        <img
          v-if="index == 2"
          src="../assets/images/gallery/pizza_hut_gallery.png"
          alt="cortez"
        />
        <img
          v-if="index == 3"
          src="../assets/images/gallery/panel_entel_gallery.png"
          alt="cortez"
        />
        <p class="client-info bold-text">
          Cliente: {{ gallery[index].client }}
        </p>
      </div>
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
        {
          client: "Cortez",
        },
        {
          client: "Toyota",
        },
        {
          client: "Pizza Hut",
        },
        {
          client: "Entel",
        },
      ],
    };
  },
});
</script>

<style lang="scss" scoped>
.gallery-main {
  position: relative;
  padding: 0 4vw;
  width: 100%;
  .gallery-img {
    padding: 0 2vw;
    .client-info {
      color: white;
      font-size: 36px;
    }
    div {
      ::v-deep img {
        max-height: 85vh;
        max-width: 70%;
        border-radius: 5px;
      }
    }
  }
  .arrow {
    position: absolute;
    display: inline-block;
    top: 50%;
    &.left {
      left: 0;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-right: 34px solid #ffffff79;
    }
    &.right {
      right: 0;
      border-top: 30px solid transparent;
      border-bottom: 30px solid transparent;
      border-left: 34px solid #ffffff79;
    }
  }
}
</style>
