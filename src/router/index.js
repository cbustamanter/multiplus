import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import NotFound from "../views/404.vue";
import About from  "../views/About.vue";
import Contact from  "../views/Contact.vue";
import Services from  "../views/Services.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/nosotros",
    name: "Nosotros",
    component: About,
  },
  {
    path: "/contacto",
    name: "Contacto",
    component: Contact,
  },
  {
    path: "/servicios",
    name: "Servicios",
    component: Services,
  },
  { path: '/:pathMatch(.*)*', name: 'not-found', component: NotFound },
  { path: '/:pathMatch(.*)', name: 'bad-not-found', component: NotFound },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
