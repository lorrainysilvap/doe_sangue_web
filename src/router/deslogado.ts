import type { RouteRecordRaw } from "vue-router";
import { RouteNames } from "./route-names";
import ViewLandingPage from "../views/landing/ViewLandingPage.vue";
import ViewLogin from "../views/ViewLogin.vue";

export const routesDeslogadas : RouteRecordRaw[] = [
    {
      path: '/',
      name: RouteNames.LANDING_PAGE,
      component: ViewLandingPage
    },
    {
      path: '/login',
      name: RouteNames.LOGIN,
      component: ViewLogin
    },    
];