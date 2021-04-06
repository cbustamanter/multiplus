import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: function() {
      return import(/* webpackChunkName: "about" */ "../views/About.vue");
    },
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
