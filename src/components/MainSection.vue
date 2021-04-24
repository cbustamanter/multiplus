<template>
  <section class="hero main-section is-fullheight">
    <div class="hero-body">
      <div class="main-content">
        <div class="columns">
          <div class="column is-offset-1 is-5-fullhd is-7">
            <p class="title bold-text has-text-left has-text-white">
              Tenemos la solución para tu negocio
            </p>
          </div>
        </div>
        <div class="columns is-mobile mt-5 ml-2">
          <div
            class="column pointer custom-btn is-offset-1-tablet is-narrow"
            @click="openModal"
          >
            <div class="columns is-mobile">
              <div class="column is-narrow has-text-white py-1 pl-4 pr-0">
                <span>Ver Video</span>
              </div>
              <div class="column centered is-narrow py-1">
                <img src="../assets/svg/right-arrow.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <vue-final-modal
    @closed="closed"
    @before-open="beforeOpen"
    v-model="showModal"
    classes="modal-container"
    content-class="modal-content"
  >
    <button class="modal__close pointer" @click="showModal = false">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="18"
        height="18"
        viewBox="0 0 18 18"
      >
        <path
          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z"
        />
      </svg>
    </button>
    <modal-video :frame="frame" />
  </vue-final-modal>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ModalVideo from "./ModalVideo.vue";

export default defineComponent({
  name: "MainSection",
  components: {
    ModalVideo,
  },
  data() {
    return {
      showModal: false,
      frame: "",
    };
  },
  methods: {
    openModal() {
      this.showModal = true;
    },
    closed() {
      this.frame = "";
    },
    beforeOpen() {
      this.frame = `<iframe allow="autoplay;" allowfullscreen frameborder="0" 
          src="https://www.youtube.com/embed/yJVc3DMOqhE?autoplay=1" style="width:50vw;height:80vh"/>`;
    },
  },
});
</script>

<style lang="scss" scoped>
.main-section {
  background: url("../assets/images/main-section1.png") no-repeat;
  background-size: cover;
  .main-content {
    p {
      font-size: 60px;
      @include from($widescreen) {
        font-size: 100px;
      }
      @include until($tablet) {
        font-size: 40px;
      }
      font-weight: bold;
      letter-spacing: 0px;
    }
    .custom-btn {
      border: 1px solid #ff0000;
      border-radius: 11px;
      span {
        font-size: 23px;
        @include from($widescreen) {
          font-size: 29px;
        }
        @include until($tablet) {
          font-size: 20px;
        }
        font-weight: lighter;
      }
    }
  }
}
::v-deep .modal-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
::v-deep .modal-content {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  border-radius: 0.25rem;
  align-items: center;
  justify-content: center;
  max-height: unset !important;
  width: 100% !important;
  height: 100% !important;
  background: #00000074;
}
.modal__title {
  font-size: 1.5rem;
  font-weight: 700;
}
.modal__close {
  z-index: 9999;
  position: absolute;
  top: 2.5rem;
  right: 2.5rem;
  background: transparent;
  border: unset;
  &:hover,
  &:active,
  &:focus {
    outline: unset;
    border: unset;
  }
  ::v-deep svg {
    fill: #ffffff79;
    width: 50px;
    height: 50px;
  }
}
</style>
