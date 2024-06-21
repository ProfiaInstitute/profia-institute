import { createRouter, createWebHistory } from "vue-router";
import { HomeView, TechHubView } from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  {path:"/techhub", name: "techhub", component: TechHubView}
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
