<template>
  <div class="services-content pb-6">
    <div class="services-container">
      <div class="columns pt-5">
        <div class="column">
          <p class="bold-text has-text-left">Inicio / Servicios</p>
        </div>
      </div>
      <div class="columns">
        <div class="column">
          <h1 class="header-title bold-text">Nuestros Servicios</h1>
        </div>
      </div>
      <services-card :cards="services" />
    </div>
  </div>
  <lets-talk class="pt-6" />
</template>

<script lang="ts">
import {defineComponent} from "vue";
import ServicesCard from "./ServicesCard.vue";
import LetsTalk from "./LetsTalk.vue";

export default defineComponent({
  components: {
    ServicesCard,
    LetsTalk
  },
  data() {
    return {
      services: [
        {
          text: "Publicidad en buses",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="67.007" height="35.911" viewBox="0 0 67.007 35.911"><g transform="translate(-224.497 -872)"><g transform="translate(224.497 768.047)"><path class="a" d="M62.233,274.68a1.2,1.2,0,0,0-1.2,1.2,1.15,1.15,0,1,1-1.15-1.15,1.2,1.2,0,1,0,0-2.393,3.543,3.543,0,1,0,3.543,3.543A1.2,1.2,0,0,0,62.233,274.68Z" transform="translate(-47.916 -143.196)"/><path class="a" d="M350.6,274.68a1.2,1.2,0,0,0-1.2,1.2,1.15,1.15,0,1,1-1.15-1.15,1.2,1.2,0,0,0,0-2.393,3.543,3.543,0,1,0,3.543,3.543A1.2,1.2,0,0,0,350.6,274.68Z" transform="translate(-293.155 -143.196)"/><path class="a" d="M62.221,103.953H4.786A4.792,4.792,0,0,0,0,108.739V128.3c0,3.275,2.773,4.827,4.858,5.367a7.181,7.181,0,0,0,13.866,1.454H48.348a7.182,7.182,0,0,0,13.507,0H65.81a1.2,1.2,0,0,0,1.2-1.2v-25.19A4.792,4.792,0,0,0,62.221,103.953Zm2.393,16.72H59.883a1.222,1.222,0,0,1-1.221-1.221v-9.479h5.952Zm-52.643,16.8a4.8,4.8,0,0,1-4.781-4.51,1.156,1.156,0,0,0,0-.56,4.789,4.789,0,1,1,4.781,5.07Zm14.44-27.5H39.527v10.7H26.411Zm-2.393,10.7H8.4a1.222,1.222,0,0,1-1.221-1.221v-9.479H24.018v10.7Zm28.724-10.7V119.5a1.173,1.173,0,0,1-1.171,1.171H41.92v-10.7ZM39.527,123.066v9.666H26.411v-9.666H39.527ZM55.1,137.47a4.79,4.79,0,1,1,4.789-4.79A4.8,4.8,0,0,1,55.1,137.47Zm7.18-4.738c0-.017,0-.035,0-.052a7.182,7.182,0,0,0-14.365,0c0,.017,0,.035,0,.052h-6v-9.666h9.651a3.568,3.568,0,0,0,3.564-3.564V108.777a1.2,1.2,0,0,0-1.2-1.2H5.984a1.2,1.2,0,0,0-1.2,1.2v10.676A3.618,3.618,0,0,0,8.4,123.066H24.018v9.666H19.151c0-.017,0-.035,0-.052a7.182,7.182,0,0,0-14.209-1.487c-1.1-.378-2.55-1.2-2.55-2.889V108.739a2.4,2.4,0,0,1,2.393-2.393H62.221a2.394,2.394,0,0,1,2.092,1.234H57.466a1.2,1.2,0,0,0-1.2,1.2v10.676a3.618,3.618,0,0,0,3.614,3.614h4.731v1.241H63.449a1.2,1.2,0,1,0,0,2.393h1.165v6.033Z"/></g></g></svg>`
        },
        {
          text: "Paneles Publicitarios",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="44.842" height="48.093" viewBox="0 0 44.842 48.093"><g transform="translate(-516 -866)"><g transform="translate(2559.012 -1417.027)"><g transform="translate(-2043.012 2283.027)"><path class="a" d="M-2000.449,2308.95h-40.284a2.283,2.283,0,0,1-2.279-2.28v-21.362a2.282,2.282,0,0,1,2.279-2.281h40.284a2.282,2.282,0,0,1,2.279,2.281v21.362A2.282,2.282,0,0,1-2000.449,2308.95Zm-40.064-2.5h39.844v-20.925h-39.844Z" transform="translate(2043.012 -2283.027)"/></g><g transform="translate(-2023.94 2306.449)"><path class="a" d="M-2015.24,2332.216h-2.844a2.047,2.047,0,0,1-1.471-.629,2.038,2.038,0,0,1-.559-1.5l0-18.948h6.91v19a2.013,2.013,0,0,1-.564,1.44A2.045,2.045,0,0,1-2015.24,2332.216Zm-.466-2.052v0Zm-1.911-.034v0Zm0-.412h1.911v-16.074h-1.912Z" transform="translate(2020.117 -2311.144)"/></g><g transform="translate(-2033.618 2322.273)"><path class="a" d="M-2007.57,2338.987h-22.065a2.1,2.1,0,0,1-1.825-1.062,2.1,2.1,0,0,1,.02-2.113l2.761-4.645a2.113,2.113,0,0,1,1.806-1.027h6.155v2.5h-5.929l-2.288,3.849h20.664l-2.288-3.849h-5.928v-2.5h6.155a2.108,2.108,0,0,1,1.806,1.028l2.761,4.644a2.1,2.1,0,0,1,.021,2.113A2.1,2.1,0,0,1-2007.57,2338.987Z" transform="translate(2031.735 -2330.14)"/></g><g transform="translate(-2033.83 2296.3)"><path class="a" d="M-2006.759,2301.46h-23.98a1.249,1.249,0,0,1-1.25-1.25,1.249,1.249,0,0,1,1.25-1.25h23.98a1.25,1.25,0,0,1,1.25,1.25A1.25,1.25,0,0,1-2006.759,2301.46Z" transform="translate(2031.989 -2298.961)"/></g><g transform="translate(-2027.2 2291.808)"><path class="a" d="M-2012.06,2296.067h-10.72a1.249,1.249,0,0,1-1.25-1.25,1.249,1.249,0,0,1,1.25-1.25h10.72a1.25,1.25,0,0,1,1.25,1.25A1.25,1.25,0,0,1-2012.06,2296.067Z" transform="translate(2024.03 -2293.568)"/></g></g></g></svg>`
        },
        {
          text: "Paraderos y Paletas",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="55.5" height="42.51" viewBox="0 0 55.5 42.51"><g transform="translate(-792.135 -869)"><g transform="translate(778.768 798.843)"><path class="a" d="M67.832,110.6h-.9V81.723h.221a1.679,1.679,0,0,0,1.678-1.765,20.891,20.891,0,0,0-1.053-5.53A6.289,6.289,0,0,0,61.8,70.157H20.437a6.289,6.289,0,0,0-5.985,4.272,20.887,20.887,0,0,0-1.053,5.53,1.679,1.679,0,0,0,1.678,1.765H15.3V110.6h-.9a1.035,1.035,0,0,0,0,2.07h8.027a1.035,1.035,0,0,0,0-2.07h-.9V104.64H60.7V110.6h-.9a1.035,1.035,0,0,0,0,2.07h8.027a1.035,1.035,0,0,0,0-2.07Zm-50.463,0V81.723h2.094V110.6ZM32.658,79.653a49.456,49.456,0,0,1,.738-7.426H48.838a49.474,49.474,0,0,1,.738,7.426Zm32.207,2.07V110.6H62.772V81.723Zm-13.924-9.5H61.8a4.221,4.221,0,0,1,4.022,2.86,18.822,18.822,0,0,1,.922,4.566H51.648A52.122,52.122,0,0,0,50.941,72.227ZM21.532,102.57v-2.517H60.7v2.517H21.532Zm11.81-10.953c-1.91,3.274-3.714,6.367-8.28,6.367h-3.53V86.292H37.362A19.2,19.2,0,0,0,33.342,91.616Zm1.788,1.043c1.91-3.274,3.714-6.367,8.28-6.367H60.7V97.983H31.112A19.206,19.206,0,0,0,35.131,92.659Zm-13.6-8.437v-2.5H60.7v2.5Zm-1.1-12H31.293a52.122,52.122,0,0,0-.706,7.426H15.493a18.813,18.813,0,0,1,.922-4.566A4.221,4.221,0,0,1,20.437,72.227Z" transform="translate(0)"/><path class="a" d="M269.2,237.786H257.7a1.035,1.035,0,1,0,0,2.07h11.5a1.035,1.035,0,1,0,0-2.07Z" transform="translate(-215.47 -148.457)"/><path class="a" d="M264.293,268.8H257.7a1.035,1.035,0,1,0,0,2.07h6.594a1.035,1.035,0,1,0,0-2.07Z" transform="translate(-215.471 -175.929)"/></g></g></svg>`
        },
        {
          text: "Letreros Luminosos",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="42.396" height="42.396" viewBox="0 0 42.396 42.396"><path class="a" d="M41.154,7.867A1.242,1.242,0,0,0,42.4,6.624V1.242A1.242,1.242,0,0,0,41.154,0H1.242A1.242,1.242,0,0,0,0,1.242V6.624A1.242,1.242,0,0,0,1.242,7.867h10.1v3.682a3.9,3.9,0,0,0-2.65,3.687v1.408H5.962A1.242,1.242,0,0,0,4.72,17.886a3.4,3.4,0,0,1-3.389,3.4H1.319l-.055,0A1.242,1.242,0,0,0,0,22.521V36.437a1.242,1.242,0,0,0,1.264,1.242l.055,0h.006a3.4,3.4,0,0,1,3.4,3.387v.014c0,.018,0,.037,0,.055A1.242,1.242,0,0,0,5.96,42.4H36.437a1.242,1.242,0,0,0,1.242-1.264c0-.018,0-.037,0-.055v-.006a3.4,3.4,0,0,1,3.387-3.4h.014l.055,0A1.242,1.242,0,0,0,42.4,36.437V22.521a1.242,1.242,0,0,0-1.242-1.242h-.022l-.055,0h-.006a3.4,3.4,0,0,1-3.4-3.4,1.242,1.242,0,0,0-1.242-1.242H33.7V15.236a3.9,3.9,0,0,0-2.65-3.687V7.867ZM2.484,2.484H39.912v2.9H2.484Zm8.695,12.752a1.408,1.408,0,1,1,2.815,0v1.408H11.179ZM39.912,23.65V35.307a5.9,5.9,0,0,0-4.605,4.605H7.089a5.9,5.9,0,0,0-4.605-4.605V23.65a5.9,5.9,0,0,0,4.588-4.522H35.324a5.9,5.9,0,0,0,4.588,4.522Zm-8.695-7.007H28.4V15.236a1.408,1.408,0,1,1,2.815,0Zm-2.65-5.1a3.9,3.9,0,0,0-2.65,3.687v1.408h-9.44V15.236a3.9,3.9,0,0,0-2.65-3.687V7.867H28.568Z" transform="translate(0)"/><path class="a" d="M141.829,287.56a3.71,3.71,0,0,0-.727,1.029l-1.856-1.856,3.612-3.612a1.242,1.242,0,0,0-1.757-1.757l-3.612,3.612-3.612-3.612a1.242,1.242,0,0,0-1.757,1.757l3.612,3.612-1.855,1.855a3.728,3.728,0,1,0-.729,4.242h0l4.339-4.339,4.339,4.339h0a3.726,3.726,0,1,0,0-5.27Zm-12.193,3.513a1.242,1.242,0,1,1,1.757,0h0a1.242,1.242,0,0,1-1.757,0Zm15.706,0a1.242,1.242,0,1,1,.364-.878,1.234,1.234,0,0,1-.364.878Z" transform="translate(-116.29 -257.732)"/></svg>`
        },
        {
          text: "Pantalla LED",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="63.074" height="41.034" viewBox="0 0 63.074 41.034"><g transform="translate(-1346 -870)"><g transform="translate(3265.946 -1493.779)"><g transform="translate(-1919.946 2363.779)"><path class="a" d="M-1861.031,2404.813h-54.757a4.163,4.163,0,0,1-4.158-4.158v-32.718a4.163,4.163,0,0,1,4.158-4.158h54.757a4.164,4.164,0,0,1,4.159,4.158v32.718A4.164,4.164,0,0,1-1861.031,2404.813Zm-54.757-38.516a1.642,1.642,0,0,0-1.64,1.64v32.718a1.643,1.643,0,0,0,1.64,1.64h54.757a1.643,1.643,0,0,0,1.641-1.64v-32.718a1.643,1.643,0,0,0-1.641-1.64Z" transform="translate(1919.946 -2363.779)"/></g><g transform="translate(-1896.371 2374.909)"><path class="a" d="M-1889.985,2395.81a1.87,1.87,0,0,1-.935-.249,1.877,1.877,0,0,1-.938-1.622v-15.027a1.879,1.879,0,0,1,.937-1.623,1.877,1.877,0,0,1,1.873,0l13.013,7.513a1.877,1.877,0,0,1,.937,1.622,1.875,1.875,0,0,1-.938,1.623l-13.013,7.513A1.865,1.865,0,0,1-1889.985,2395.81Zm-.323-2.431h0Zm.968-13.35v12.791l11.078-6.4Z" transform="translate(1891.859 -2377.039)"/></g></g></g></svg>`
        },
        {
          text: "Totem Publicitarios",
          img: `<svg xmlns="http://www.w3.org/2000/svg" width="34.084" height="47.854" viewBox="0 0 34.084 47.854"><g transform="translate(1900.9 -2367.145)"><g transform="translate(-1895.795 2374.079)"><path class="a" d="M-1872.644,2377.592h-21.2a1.339,1.339,0,0,1-1.339-1.339,1.339,1.339,0,0,1,1.339-1.339h21.2a1.339,1.339,0,0,1,1.339,1.339A1.339,1.339,0,0,1-1872.644,2377.592Z" transform="translate(1895.18 -2374.914)"/></g><g transform="translate(-1895.795 2380.659)"><path class="a" d="M-1872.644,2384.964h-21.2a1.339,1.339,0,0,1-1.339-1.338,1.339,1.339,0,0,1,1.339-1.339h21.2a1.339,1.339,0,0,1,1.339,1.339A1.339,1.339,0,0,1-1872.644,2384.964Z" transform="translate(1895.18 -2382.287)"/></g><g transform="translate(-1895.795 2387.238)"><path class="a" d="M-1872.644,2392.336h-21.2a1.339,1.339,0,0,1-1.339-1.339,1.339,1.339,0,0,1,1.339-1.339h21.2A1.339,1.339,0,0,1-1871.3,2391,1.339,1.339,0,0,1-1872.644,2392.336Z" transform="translate(1895.18 -2389.659)"/></g><g transform="translate(-1900.9 2367.145)"><path class="a" d="M-1866.816,2399.919H-1900.9v-30.2a2.577,2.577,0,0,1,2.574-2.573h28.936a2.577,2.577,0,0,1,2.574,2.573Zm-31.407-2.677h28.729v-27.419h-28.729Z" transform="translate(1900.9 -2367.145)"/></g><g transform="translate(-1900.9 2398.58)"><rect class="a" width="2.677" height="16.277"/></g><g transform="translate(-1869.493 2398.58)"><rect class="a" width="2.677" height="16.418"/></g></g></svg>`
        },
      ]
    }
  },
  name: "ServicesContent",
});
</script>

<style lang="scss" scoped>
.services-content {
  .services-container {
    margin-right: 7vw;
    margin-left: 7vw;

    .header-title {
      font-size: 39px;
    }
  }
}
</style>
