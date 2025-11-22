import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import { routesDoador } from './doador'
import { routesDeslogadas } from './deslogado'

const routes : RouteRecordRaw[] = [...routesDeslogadas, ...routesDoador];

export const router = createRouter({
  history: createWebHistory(),
  routes
})