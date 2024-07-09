import { createRouter, createWebHistory } from "vue-router";
import {
  HomeView,
  TechHubView,
  AcademicsView,
  SchoolofBusiness,
  NewsView,
  AboutusView,
  ContactView,
  AdmissionView,
  NotFoundView,
  SchoolofHospitalityView,
  SchoolofCosmetologyView,
  SchoolofEngineeringView,
  SchoolofICTView,
} from "../views";

// import { useAuthStore } from "../store";

const routes = [
  { path: "/", name: "home", component: HomeView },
  { path: "/techhub", name: "techhub", component: TechHubView },
  { path: "/academics", name: "academics", component: AcademicsView },
  {
    path: "/sob",
    name: "schoolofbusiness",
    component: SchoolofBusiness,
  },
  {
    path: "/soh",
    name: "schoolofhospitality",
    component: SchoolofHospitalityView,
  },
  {
    path: "/soc",
    name: "schoolofcosmetology",
    component: SchoolofCosmetologyView,
  },
  {
    path: "/soe",
    name: "schoolofengineering",
    component: SchoolofEngineeringView,
  },
  {
    path: "/soi",
    name: "schoolofict",
    component: SchoolofICTView,
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
