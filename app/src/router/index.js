import { createRouter, createWebHistory } from "vue-router";
import { HomeView } from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
