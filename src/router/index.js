import { createRouter, createWebHistory } from 'vue-router'
//import Home from '../views/Home.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import users from '../views/users.vue'
import Home from '../components/Home.vue'

const routes = [
  {
    path:'/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Register',
    name: 'Register',
    component: Register
  },
  {
    path: '/users',
    name: 'users',
    component: users
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router