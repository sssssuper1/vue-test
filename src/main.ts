import { createApp } from 'vue'
import * as VueRouter from 'vue-router'
import App from './App.vue'
import routes from './router'
import TodoList from './components/TodoList.vue'

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

createApp(App)
  .use(router)
  .component('TodoList', TodoList)
  .mount('#app')
