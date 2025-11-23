import type { RouteRecordRaw } from "vue-router";
import { RouteNames } from "./route-names";
import ViewHomeHemocentro from "../views/hemocentro/ViewHomeHemocentro.vue";
import ViewBolsasSangue from "../views/hemocentro/ViewBolsasSangue.vue";

export const routesHemocentro : RouteRecordRaw[] = [
  {
    path: '/hemocentro/home',
    name: RouteNames.HOME_HEMOCENTRO,
    component: ViewHomeHemocentro
  },
  {
    path: '/hemocentro/bolsas-sangue',
    name: RouteNames.BOLSAS_SANGUE_HEMOCENTRO,
    component: ViewBolsasSangue
  },
  
]