import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import RegisterView from "../views/RegisterView"
import LoginView from "../views/LoginView"

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
{
  path: '/login',
  name: 'login',
  component: LoginView
},
)


export default router
