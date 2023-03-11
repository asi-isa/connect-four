import { createRouter, createWebHistory } from "vue-router";

import Menu from "../pages/Menu.vue";
import Game from "../pages/Game.vue";

const routes = [
  { path: "/", component: Menu },
  { path: "/game", component: Game },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
