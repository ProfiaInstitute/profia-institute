import { createRouter, createWebHistory } from "vue-router";
import { HomeView, TechHubView, Academics,SchoolofBus, NewsView } from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/techhub", name: "techhub", component: TechHubView },
  { path: "/academics", name: "academics", component: Academics },
  { path: "/scholofbus", name: "schoolofbus", component: SchoolofBus },
  { path: "/news", name: "news", component: NewsView },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
