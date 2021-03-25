import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import InventoryCutoff from "../views/InventoryCutoff.vue";
import Login from "../views/Login";
import Logout from "../components/Logout"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
    meta: {
      requiresVisitor: true,
    }
    
  },
  {
    path: '/logout',
    name: 'Logout',
    component: Logout
  },
  {
    path: "/home",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: true,
    }
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
    meta: {
      requiresAuth: true,
    }
  },
];

const router = new VueRouter({
  routes,
  
});

export default router;
