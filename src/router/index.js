import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import InventoryCutoff from "../views/InventoryCutoff.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/backup",
    name: "Backup",
    component: InventoryCutoff,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
