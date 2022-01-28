import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import form1 from '../views/form1.vue'
import form2 from '../views/form2.vue'
import form3 from '../views/form3.vue'
import form4 from '../views/form4.vue'
import form5 from '../views/form5.vue'
import form6 from '../views/form6.vue'
import form7 from '../views/form7.vue'
import form8 from '../views/form8.vue'
import form9 from '../views/form9.vue'
import form10 from '../views/form10.vue'
import task1 from '../views/task1.vue'
import task2 from '../views/task2.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/form1',
    name: 'Form1',
    component : form1
  },
  {    
    path: '/form2',
    name: 'Form2',
    component : form2
  },
  {    
    path: '/form3',
    name: 'Form3',
    component : form3
  },
  {
    path: '/form4',
    name: 'Form4',
    component : form4
  },
  {
    path: '/form5',
    name: 'Form5',
    component : form5
  },
  {
    path: '/form6',
    name: 'Form6',
    component : form6
  },
  {
    path: '/form7',
    name: 'Form7',
    component : form7
  },
  {
    path: '/form8',
    name: 'Form8',
    component : form8
  },
  {
    path: '/form9',
    name: 'Form9',
    component : form9
  },
  {
    path: '/form10',
    name: 'Form10',
    component : form10
  },
  {
    path: '/task1',
    name: 'PATIENT INFO',
    component: task1
  },
  {
    path: '/task2',
    name: 'Task2',
    component: task2
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
