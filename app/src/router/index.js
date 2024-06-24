import { createRouter, createWebHistory } from "vue-router";
import { HomeView, TechHubView, Academics, NewsView } from "../views";
// import NewsView from "../views/NewsView.vue";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/techhub", name: "techhub", component: TechHubView },
  { path: "/academics", name: "academics", component: Academics },
  { path: "/news", name: "news", component: NewsView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
