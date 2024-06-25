import { createRouter, createWebHistory } from "vue-router";
import { HomeView, TechHubView, Academics, SchoolofBussines, NewsView,Aboutus } from "../views";

// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/techhub", name: "techhub", component: TechHubView },
  { path: "/academics", name: "academics", component: Academics },
  { path: "/scholofbussiness", name: "schoolofbussiness", component: SchoolofBussines },
  { path: "/news", name: "news", component: NewsView },
  { path: "/aboutus", name: "aboutus", component: Aboutus },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
