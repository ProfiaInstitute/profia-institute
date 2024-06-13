import { createRouter, createWebHistory } from "vue-router";
import { HomeView, ArticlesListView, ArticlesPageView, PostsView, DetailsView, } from "../views";
// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/articles", name: "articles", component: ArticlesListView },
  { path: "/articles/:slug", name: "articles-page", component: ArticlesPageView, props: true },
  { path: "/posts", name: "posts", component: PostsView },
  { path: "/posts/:id", name: "details", component: DetailsView, props: true },
];

/**Initialize here */
const router = createRouter({ history: createWebHistory(), routes });

export default router;
