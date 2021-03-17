<template>
  <nav
    class="navbar is-transparent"
    role="navigation"
    aria-label="main navigation"
  >
    <div class="navbar-brand">
      <a class="navbar-item p-0" href="/">
        <img
          src="../assets/images/nav-logo1.png"
          alt="logo"
          width="218"
          height="150"
        />
      </a>
      <a
        role="button"
        class="navbar-burger"
        data-target="navMenu"
        aria-label="menu"
        aria-expanded="false"
      >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>
    <div class="navbar-menu" id="navMenu">
      <div class="navbar-end">
        <div class="navbar-item">
          <div class="field is-grouped">
            <p class="control">
              <a class="nav-opt">
                <span> Nosotros </span>
              </a>
            </p>
            <p class="control">
              <a class="nav-opt">
                <span> Servicios </span>
              </a>
            </p>
            <p class="control">
              <a class="nav-opt">
                <span> Servicios </span>
              </a>
            </p>
            <p class="control">
              <a class="nav-opt">
                <span> Clientes </span>
              </a>
            </p>
            <p class="control">
              <a class="nav-opt">
                <span> Contacto </span>
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Navbar",
  mounted() {
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Check if there are any navbar burgers
    if ($navbarBurgers.length > 0) {

      // Add a click event on each of them
      $navbarBurgers.forEach( el => {
        el.addEventListener('click', () => {

          // Get the target from the "data-target" attribute
          const target = el.dataset.target;
          const $target = document.getElementById(target);

          // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
          el.classList.toggle('is-active');
          $target.classList.toggle('is-active');

        });
      });
    }
  }
});
</script>

<style scoped></style>
