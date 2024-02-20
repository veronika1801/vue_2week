import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from "../views/RegisterView"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
},
{
  path: '/register',
  name: 'register',
  component: RegisterView
},
)


export default router
