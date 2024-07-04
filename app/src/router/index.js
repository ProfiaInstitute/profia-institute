import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  TechHubView,
  Academics,
  SchoolofBusiness,
  NewsView,
  AboutusView,
  ContactView,
  AdmissionView,
  NotFoundView,
} from "../views";

// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/techhub", name: "techhub", component: TechHubView },
  { path: "/academics", name: "academics", component: Academics },
  {
    path: "/sob",
    name: "schoolofbusiness",
    component: SchoolofBusiness,
  },
  { path: "/news", name: "news", component: NewsView },
  { path: "/aboutus", name: "aboutus", component: AboutusView },
  { path: "/contact", name: "contact", component: ContactView },
  { path: "/admission", name: "admission", component: AdmissionView },
  { path: "/:PathMatch(.*)*", name: "Errorpage", component: NotFoundView },
];

/**Initialize here */
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
