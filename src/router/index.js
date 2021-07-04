import Vue from "vue";
import VueRouter from "vue-router";
import Zadanie1 from "../views/Zadanie1.vue";
import Zadanie19 from "../views/Zadanie19";
import Zadanie9 from "../views/Zadanie9";
import Zadanie24 from "../views/Zadanie24";

Vue.use(VueRouter);

const routes = [
  {
    path: "/zadanie1",
    name: "Zadanie 1",
    component: Zadanie1,
  },
  {
    path: "/zadanie19",
    name: "Zadanie 19",
    component: Zadanie19,
  },
  {
    path: "/zadanie9",
    name: "Zadanie 9",
    component: Zadanie9,
  },
  {
    path: "/zadanie24",
    name: "Zadanie 24",
    component: Zadanie24,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
